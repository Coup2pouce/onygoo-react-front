import { Row, Col } from "react-bootstrap";
import { Icon } from "@material-ui/core";
import { colorBottonReserver } from "../../constants/colors";


const InfoVoiture = (props) => {

    return (<div className="card" style={{ height: "25em", marginTop: "5px", padding: "20px", width: "80%" }}>
                       <Row>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">
                                    <Icon>check box</Icon>
                                </Col>
                                <Col sm="10">
                                    <p class="small  text-secondary">Acepté <br></br>90%</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">
                                    <Icon>alarm</Icon>
                                </Col>
                                <Col sm="10">
                                    <p class="small  text-secondary">Temps de réponse <br></br> -5 minutes</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">
                                    <Icon>today</Icon>
                                </Col>
                                <Col sm="10">
                                    <p class="small  text-secondary"> Calendrier mis à jour <br></br> Aujourd'hui</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h6 class="small " style={{ color: colorBottonReserver }}><strong>INFORMATIONS SUR LA VOITURE</strong> </h6>
                    <Row>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">
                                    <Icon>time to live</Icon>
                                </Col>
                                <Col sm="10">
                                    <p class="small  text-secondary"> Type de Voiture <br></br> Break / Monospace</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">

                                </Col>
                                <Col sm="10">
                                    <p class="small  text-secondary"> Boite <br></br>Automatique</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">
                                    <Icon> local gaz</Icon>
                                </Col>
                                <Col sm="10">
                                    <p class="small  text-secondary"> Carburant <br></br>Diesel</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">
                                  
                                </Col>
                                <Col sm="10">
                                    <p class="small  text-secondary">Année <br></br>2011</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">
                           
                                </Col>
                                <Col sm="10">
                                    <p class="small  text-secondary">Place assises 5</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">
                                    <Icon>build</Icon>
                                </Col>
                                <Col sm="10">
                                    <p class="small  text-secondary">Assistance Routière <br></br> 24/7</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h6 class="small  text-secondary" style={{ color: colorBottonReserver }}><strong>EQUIPEMENTS SUPLEMENTAIRES</strong> </h6>
                    <Row>
                        <Col sm="2">
                        <i class="fa fa-thermometer-empty" aria-hidden="true"></i>
                        </Col>
                        <Col sm="10">
                            <p class="small  text-secondary">Climatisation</p>
                        </Col>
                    </Row>
    </div>
    )
}
export default InfoVoiture;


