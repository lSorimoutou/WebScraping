import React from 'react';

import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from '../card-produit.components/card-produit.components';



export default function Produits(props) {

    let items = props.data;
    
    if (props.product.product!== undefined){
        let product = props.product.product;
        items = [{
            name: product.product_name,
            url: product.image_front_url,
            price : "",
            ingredients: product.ingredients_text,
            weight: product.quantity,
            infoNutri: "",
            desc : "",
            info: product.categories
        }]
    }
    const taille = items.length;
    return(
        <div>
           { items.length !== 0 ? <p className="taille">{taille} Articles.</p> : "" }
            <Grid container
                spacing={6}
                direction="row"
                justify="center"
                alignItems="center"
            >
            {
                    items.map((item, index) => (<Grid item xs={6} sm={3} key={index} ><RecipeReviewCard {...item} key={index} /></Grid>))
            }
            </Grid>
        </div>
    )
}
