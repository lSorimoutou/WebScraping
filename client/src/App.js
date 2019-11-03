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
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  clickSubmit = () => {

    const { produit } = this.state;
    let service = Singleton.getInstance();
    this.setState({ loading: true });

    service.onmessage = (event) => {
      if (event.data) {
        if (event.data === "Nothing") {
          alert("Aucun produit n'a été trouvé !");
          this.setState({ loading: false });
        }
        else {
          this.setState({ data: JSON.parse(event.data) });
          service.close();
          this.setState({ loading: false });
        }

      }
    };

    service.onopen = () => {
      console.log("service.onopen...");
      service.send(produit.toLowerCase());
    }

    service.onclose = (event/*:CloseEvent*/) => {
      console.log("service.onclose... " + event.code);
    };

    service.onerror = () => {
      window.alert("service.onerror...");
    };
  }

  render(){
    return (
      <div className="App">
        <Router>
          <SearchAppBar
            placeholder="Nom du produit"
            onChange={this.handleChange}
            value={this.produit}
            name='produit'
            onClick={this.clickSubmit}
            title="Web Scraping" />
          <Switch>
            <Route exact path='/' component={() => <HomePage data={this.state.data} loading={this.state.loading} />} />
            <Route exact path='/CR' component = { () => <CRPage/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
