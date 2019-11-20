import React from 'react';

import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from '../card-produit.components/card-produit.components';



export default function Produits(props) {

    const items = props.data;
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