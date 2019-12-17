import React from 'react';

import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from '../card-produit.components/card-produit.components';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardDeck from 'react-bootstrap/CardDeck';

export default function Produits(props) {

    let items = props.data;
    
    if (props.product.product!== undefined){
        let product = props.product.product;
        items = [{
            name: product.product_name,
            url: product.image_front_url,
            price : "",
            priceUnit : "",
            ingredients: product.ingredients_text,
            weight: product.quantity,
            infoNutri: "",
            desc : "",
            info: product.categories
        }]
    }
    const taille = items.length;
    return (
      <div>
        <Container>
          <Row>
            {items.length !== 0 ? (
              <p className="taille">{taille} Articles.</p>
            ) : (
              ""
            )}
          </Row>
          <Row>
            <Grid
              container
              spacing={6}
              direction="row"
              justify="center"
              alignItems="center"
            >
              {items.map((item, index) => (
                <CardDeck >
                  <RecipeReviewCard {...item} key={index} />
                </CardDeck>
              ))}
            </Grid>
          </Row>
        </Container>
      </div>
    );
}
