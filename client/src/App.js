import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.scss';

import HomePage from './Pages/HomePage';
import SearchAppBar from './Components/searchAppbar.components/searchAppbar';
import Singleton from './socket';
import CRPage from './Pages/CRPage';

class App extends Component {

  constructor() {
    super();

    this.state = {
      produit: "",
      data: [],
      loading: false,
      product : {}
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  clickSubmit = () => {

    const { produit } = this.state;
    let reg = /^\d{11,14}$/;
    let good_char = /[\w\s]/;

    // Check if there are no special characters in the product name.
    if (good_char.test(produit)) {
      // Check if the product name is a barcode
      if (reg.test(produit.trim())) {
        let myInit = {
          method: "GET",
          mode: "cors",
          cache: "default"
        };

        fetch(
          "https://world.openfoodfacts.org/api/v0/product/" + produit + ".json",
          myInit
        )
          .then(res => {
            return res.json();
          })
          .then(json => {
            this.setState({ product: json });
          });
      } else {
        let service = Singleton.getInstance();
        this.setState({ loading: true });

        service.onmessage = event => {
          if (event.data) {
            if (event.data === "Nothing") {
              alert("Aucun produit n'a été trouvé !");
              this.setState({ loading: false });
              service.close();
            } else {
              this.setState({ data: JSON.parse(event.data) });
              service.close();
              this.setState({ loading: false });
            }
          }
        };

        service.onopen = () => {
          console.log("service.onopen...");
          service.send(produit.toLowerCase());
        };

        service.onclose = (event /*:CloseEvent*/) => {
          console.log("service.onclose... " + event.code);
        };

        service.onerror = () => {
          window.alert("service.onerror...");
        };
      }
    } else {
      window.alert("N'utiliser pas les caractères spériaux !");
    }
  }

  render(){
    return (
      <div className="App">
        <Router>
          <SearchAppBar
            placeholder="Nom du produit/Code Barre"
            onChange={this.handleChange}
            value={this.produit}
            name='produit'
            onClick={this.clickSubmit}
            title="Web Scraping." />
          <Switch>
            <Route exact path='/' component={() => <HomePage data={this.state.data} loading={this.state.loading} product={this.state.product} />} />
            <Route exact path='/CR' component = { () => <CRPage/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
