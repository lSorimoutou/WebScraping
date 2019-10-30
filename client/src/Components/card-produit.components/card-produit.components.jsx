import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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


    return (
        <Card className={classes.card}> 
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.name}
                subheader={props.info + props.weight}
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
            </CardActions>
        </Card>
    );
}