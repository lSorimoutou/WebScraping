import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Collapse from '@material-ui/core/Collapse';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        margin: 'auto',
        height: '170px',
        width: '170px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}> 
            <CardHeader
                title={props.name}
                subheader={props.info + " " + props.weight}
            />
            <CardMedia
                className={classes.media}
                image={props.url}
                title={props.name}
            />
            <CardContent>
                <Typography variant="h5" color="error" component="P" align='center'>
                    {props.price + "€"}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6">Description</Typography>
                    <Typography variant="p" paragraph='true'>{props.desc}</Typography>
                    <Typography variant="h6">Ingrédients</Typography>
                    <Typography variant="p" paragraph='true'>{props.ingredients}</Typography>
                    <Typography variant="h6">INFORMATIONS NUTRITIONNELLES</Typography>
                    <Typography variant="p" paragraph='true'>{props.infoNutri}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}