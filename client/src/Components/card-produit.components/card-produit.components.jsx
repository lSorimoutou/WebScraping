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

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Informations sur le produit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs md="auto">
              <img src={props.url} alt="img"></img>
            </Col>
          </Row>
          <Row>
            {props.desc !== "" ? (
              <div>
                <Typography className="titleCard" variant="h6">
                  Description
                </Typography>
                <Typography variant="body1" paragraph={true}>
                  {props.desc}
                </Typography>
              </div>
            ) : (
              ""
            )}
            {props.ingredients !== "" ? (
              <div>
                {" "}
                <Typography variant="h6" className="titleCard">
                  Ingrédients
                </Typography>
                <Typography variant="body1" paragraph={true}>
                  {props.ingredients}
                </Typography>
              </div>
            ) : (
              ""
            )}
            {props.infoNutri !== "" ? (
              <div>
                {" "}
                <Typography variant="h6" className="titleCard">
                  INFORMATIONS NUTRITIONNELLES
                </Typography>
                <Typography variant="body1" paragraph={true}>
                  {props.infoNutri}
                </Typography>
              </div>
            ) : (
              ""
            )}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};


export default function RecipeReviewCard(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const classes = useStyles();

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
          onClick={() => setModalShow(true)}
        />
        <CardContent>
          <Typography variant="h5" color="error" component="p" align="center">
            {props.price !== "" ? props.price + "€" : ""}
          </Typography>
        </CardContent>
        <MyVerticallyCenteredModal
          desc={props.desc}
          ingredients={props.ingredients}
          infoNutri={props.infoNutri}
          url={props.url}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card>
    );
}