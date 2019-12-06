import React from 'react';
import {
    Link
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import ListItemText from '@material-ui/core/ListItemText';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFile } from "@fortawesome/free-solid-svg-icons";

import './searchAppbar.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(4),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    githubIcon : {
        padding : theme.spacing(1,2),

    }
}));

const style = {
    background: '#20232A',
};


export default function SearchAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={style} position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {props.title}
                    </Typography>
                    <ListItemText inset>
                        <Link  to="/"><Button color="inherit"><FontAwesomeIcon icon={faHome} />ACCUEIL</Button></Link>
                        <Link to="/CR"><Button color="inherit"><FontAwesomeIcon icon={faFile} />COMPTE-RENDU</Button></Link>
                    </ListItemText>
                    <ListItemText inset>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder={props.placeholder}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={props.onChange}
                                value={props.value}
                                name={props.name}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        props.onClick();
                                    }
                                }}
                            />
                        </div>
                    </ListItemText>
                    <ListItemText inset>
                        <a href="https://github.com/lSorimoutou/WebScraping">
                            <Button color="inherit">
                                GITHUB <GitHubIcon className={classes.githubIcon} />
                            </Button>
                        </a>
                    </ListItemText>
                </Toolbar>
            </AppBar>

            {props.children}
        </div>
    );
}