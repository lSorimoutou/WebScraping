import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Produits from '../Components/produits.components/produits.components';


export default class HomePage extends React.Component{


    render(){
        return (
            <div className="content">
                    {
                        (this.props.loading) ?
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item ><CircularProgress disableShrink /></Grid>
                            </Grid>
                            :
                            <Produits data={this.props.data} product={this.props.product} />

                    }    
            </div>
        )
    }
}
