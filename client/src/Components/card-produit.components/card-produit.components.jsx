import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

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
            <Col xs md="5">
              <img src={props.url} className="card-img" alt="img"></img>
            </Col>
            <Col md="7">
              {props.desc !== "" ? (
                <div>
                  <h6 className="card-title">
                    Description
                  </h6>
                  <p className="card-paragraph">
                    {props.desc}
                  </p>
                </div>
              ) : (
                  ""
                )}
              {props.ingredients !== "" ? (
                <div>
                  {" "}
                  <h6 className="card-title">
                    Ingrédients
                </h6>
                  <p className="card-paragraph">
                    {props.ingredients}
                  </p>
                </div>
              ) : (
                  ""
                )}
              {props.infoNutri !== "" ? (
                <div>
                  {" "}
                  <h6 className="card-title">
                    INFORMATIONS NUTRITIONNELLES
                </h6>
                  <p className="card-paragraph">
                    {props.infoNutri}
                  </p>
                </div>
              ) : (
                  ""
                )}
            </Col>
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