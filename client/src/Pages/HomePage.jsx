import React from 'react';
import Grid from '@material-ui/core/Grid';

import Form from '../Components/form.components/form-input.component';
import Singleton from '../socket';

import Produits from '../Components/produits.components/produits.components';

import './HomePage.scss';




export default class HomePage extends React.Component{
    
        constructor(){
        super();

            this.state= {
            produit : "",
            codeBarre : "",
            data : []
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({[name] : value});
    }

    clickSubmit = () => {

        const { produit } = this.state; 
        let service = Singleton.getInstance();

        service.onmessage = (event) => {
            if(event.data){
                this.setState({ data: JSON.parse(event.data)})
            }
        };

        service.onopen = () => {
            console.log("service.onopen...");
            service.send(produit);
        }

        service.onclose = (event/*:CloseEvent*/) => {
            console.log("service.onclose... " + event.code);
        };

        service.onerror = () => {
            window.alert("service.onerror...");
        };

        // Singleton.endInstance();
    }



    render(){
        
        return (
            <div>
                <h2>Projet de Webscraping</h2>
                <Grid container 
                    spacing={6} 
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item >
                        <Form placeholder="Nom du produit" onChange={this.handleChange} value={this.produit} name='produit' onClick={this.clickSubmit} />
                    </Grid>
                    <Grid item >
                        <Form placeholder="Code Barre" onChange={this.handleChange} value={this.codeBarre} name='codeBarre' onClick={this.clickSubmit} />
                    </Grid>
                </Grid>
                <Produits data = {this.state.data}/>
            </div>
        )
    }
}
