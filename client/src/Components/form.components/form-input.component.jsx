import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function FormInput(props){
    const classes = useStyles();
    return (
            <div>
                <Paper className={classes.root}>
                    <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                        <ShoppingBasketIcon />
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical" />
                    <InputBase
                        className={classes.input}
                        placeholder={props.placeholder}
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={props.onChange}
                        value={props.value}
                        name={props.name}
                    />
                    <IconButton className={classes.iconButton} aria-label="search" onClick= {props.onClick}>
                        <SearchIcon />
                    </IconButton>

                </Paper>
            </div>
    );  
}