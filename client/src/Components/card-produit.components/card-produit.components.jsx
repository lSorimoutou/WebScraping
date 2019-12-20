import React from 'react';

import Card from 'react-bootstrap/Card'

import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import noImg from '../../assets/img/pas-d-image-disponible.jpg'

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
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs md="5">
              <img src={props.url !=="/contents/images/cart_icon.svg"? props.url.replace("Small_Grocery","High_Grocery") : noImg} className="card-img" alt="img"></img>
            </Col>
            <Col md="7">
              {props.desc !== "" ? (
                <div>
                  <h6 className="card-title">
                    {props.name}
                  </h6>
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
    </Modal>
  );
};


export default function RecipeReviewCard(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const regexSVG = /svg/;
    return (
      <Card style={{ width: '18rem', height:'440px' }}>
        <Card.Img variant="top" src={(!regexSVG.test(props.url)) ? props.url.replace("Small_Grocery", "High_Grocery") : noImg} onClick={() => setModalShow(true)}/>
        <Card.Body>
          <Card.Title onClick={() => setModalShow(true)}>{props.name}</Card.Title>
          <Card.Text>
            <span className="marque">
              {props.info}
            </span>
            <br></br>
            {props.weight}
          </Card.Text>
          <br></br>
          <span className="price">
            {props.price !== "" ? props.price : ""}
          </span>
          <br></br>
          <span className="priceUnit">
            {props.priceUnit !== "" ? props.priceUnit : ""}
          </span>
        </Card.Body>
        <MyVerticallyCenteredModal
          desc={props.desc}
          ingredients={props.ingredients}
          infoNutri={props.infoNutri}
          url={props.url}
          show={modalShow}
          name={props.name}
          onHide={() => setModalShow(false)}
        />
      </Card>
    );
}