import { Row, Col } from "react-bootstrap";
import { Icon } from "@material-ui/core";
import { colorBottonReserver, textBlue } from "../../constants/colors";
import { Image } from "react-bootstrap";

const InfoVoiture = (props) => {

    return (<div className="card" style={{  marginTop: "5px", padding: "20px" }}>
                       <Row>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">  <Image src="/images/icons/Icon material-check-box.png"  height="18px" ></Image> </Col>
                                <Col sm="10"> <p class="small  text-secondary">Acepté <br></br>90%</p> </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2"> <Icon>alarm</Icon>  </Col>
                                <Col sm="10"> <p class="small  text-secondary">Temps de réponse <br></br> -5 minutes</p> </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2"> <Icon>today</Icon> </Col>
                                <Col sm="10"> <p class="small  text-secondary"> Calendrier mis à jour <br></br> Aujourd'hui</p>  </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br></br>
                    <h6 class="small"  style={{ color: textBlue, paddingLeft: "15px" }}><strong>INFORMATIONS SUR LA VOITURE</strong> </h6>
                    <Row>
                        <Col sm="4">
                            <Row>   <Col sm="2"> <Image src="/images/icons/Icon awesome-car-side.png"  height="18px"  ></Image>  </Col>
                                    <Col sm="10"> <p class="small  text-secondary"> Type de Voiture <br></br> Break / Monospace</p> </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2"><Image src="/images/icons/shifter.png"  height="18px"  ></Image> </Col>
                                <Col sm="10"> <p class="small  text-secondary"> Boite <br></br>Automatique</p> </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2"><Image src="/images/icons/fuel.png "  height="18px" ></Image> </Col>
                                <Col sm="10"> <p class="small  text-secondary"> Carburant <br></br>Diesel</p> </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row>
                        <Col sm="4">
                            <Row>
                                <Col sm="2"><Image src="/images/icons/Icon material-time-to-leave.png"  height="18px" ></Image> </Col>
                                <Col sm="10"> <p class="small  text-secondary">Année <br></br>2011</p> </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">  <Image src="/images/icons/car-seat.png"  height="18px"  /></Col>
                                <Col sm="10"> <p class="small  text-secondary">Place assises 5</p> </Col>
                            </Row>
                        </Col>
                        <Col sm="4">
                            <Row>
                                <Col sm="2">  <Image src="/images/icons/Icon map-car-repair.png"  height="21px"  /></Col>
                                <Col sm="10"> <p class="small  text-secondary">Assistance Routière <br></br> 24/7</p> </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br></br>
                    <h6 class="small" style={{ color: textBlue,  paddingLeft: "15px" }}><strong>EQUIPEMENTS SUPLEMENTAIRES</strong> </h6>
                    <Row>
                        <Col sm="1" > <Image src="/images/icons/cold.png"  height="21px"  /> </Col>
                         <Col sm="11"> <p class="small  text-secondary">Climatisation</p> </Col>
                    </Row>
    </div>
    )
}
export default InfoVoiture;


