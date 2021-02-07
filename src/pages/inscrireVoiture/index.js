import { Container, Row, Col, Form, Image } from "react-bootstrap";
import MainButton from "../../components/buttons/mainButton";
import {  colorGray, colorPink, mainBlue } from "../../constants/colors";

const InscrireVoiture = () => {

    return <Container fluid style={{backgroundColor: colorGray, marginTop: "5em", width: "100%", height: "100vh"}} className="p-5">
        <Row>
            <Col>
               <h1 style={{color: mainBlue}}>Complétez vos revenus en <br/> Partageant votre voiture</h1>
              <div  className="py-5"/>
               <Row>
                    <Col>
                        <Form.Control placeholder="Volkswagen"  style={{height: "48px"}}/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Golf"  style={{height: "48px"}}/>
                    </Col>
               </Row>
              <div className="mt-4" />
               <Row>
                    <Col>
                        <Form.Control placeholder="2018" style={{height: "48px"}} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="100-150 000 km" style={{height: "48px"}} />
                    </Col>
               </Row>
               <div className="mt-4" />
               <Row>
                    <Col>
                        <Form.Control placeholder="Indiquez votre ville" style={{height: "48px"}} />
                    </Col>
                    <Col></Col>
               </Row>
              <div className="text-center mt-5">
              <MainButton title="commencer" color={colorPink} w="250px" fontsize="bold" />

              </div>
            </Col>
            <Col>
            <Image src="https://cdn.pixabay.com/photo/2014/04/02/16/22/bus-307098__340.png"  width="100%" />
            </Col>
        </Row>
    </Container>

}

export default InscrireVoiture;