import { useHistory } from "react-router-dom";
import { DETAILS, LOCATIONDETAILS } from "../../constants/routes";
//import { Avatar } from 'primereact/avatar';
import { Star } from "@material-ui/icons";
import { colorPink, darkBlue, mainBlue } from "../../constants/colors";
import { Col, Image, Row } from "react-bootstrap";
import { Avatar } from "@material-ui/core";



const CovoitureListCard = (props) => {

    const history = useHistory();

    const {post, idProp} = props;


    const formatStars = (stars) => {
        const starList = [];
        const off = 5 - stars;

          [...Array(stars).keys()].forEach((item) =>{
          
              starList.push(<Star style={{color: "#E4EB1D"}} />)
          
          });

          [...Array(off).keys()].forEach((item) =>{
          
            starList.push(<Star className="text-muted" />)
        
        })
          
      

        return starList;
      }

    return (<div className="card card-body" style={{width: "100%", cursor: "pointer"}} onClick={()=> {
         history.push({
             pathname: LOCATIONDETAILS,
             state: {
                 id: post.id,
                 proprietaireId: idProp
             }
         })    }}>
                <Row>
                    <Col sm="3  text-center pt-2">
                        <Image className="rounded-circle" width="120px" height="120px" src="https://uifaces.co/our-content/donated/6MWH9Xi_.jpg" />
                        <h6 className="mt-3">Alvin Gomis</h6>
                        <p>{formatStars(5)}</p>
                    </Col>
                    <Col sm="5 pt-4">

                        <h5 className="font-weight-bold">Ajoud'hui à 18: 55</h5>

                        <div>
                            <Row>
                                <Col sm="1" style={{position: "relative", height:"110px"}} className="mt-2">
                                    <div
                                      style={{
                                         position: "absolute",
                                         top: "0",
                                          width: "15px",
                                          height: "15px",
                                          borderRadius: "50%",
                                          backgroundColor: darkBlue,
                                          zIndex: "8"
                                      }}
                                    ></div>
                                    <div
                                    style={{
                                        position: "absolute",
                                        width: "2px",
                                        height: "100px",
                                        backgroundColor: "black",
                                        right: "1.1em",
                                        zIndex: "4"
                                    }}
                                    ></div>
                                    <div
                                    style={{
                                        position: "absolute",
                                        width: "15px",
                                        height: "15px",
                                        borderRadius: "50%",
                                        bottom: "0",
                                        backgroundColor: colorPink,
                                        zIndex: "8"
                                    }}
                                    >

                                    </div>
                                </Col>
                                <Col sm="11">
                                <div>
                                    <h5>Dakar</h5>
                                    <p style={{marginTop: "-.5em"}}>Garage Pompier</p>
                                </div>
                                <div className="py-3"></div>
                                <div>
                                    <h5>Thiés</h5>
                                    <p  style={{marginTop: "-.5em"}}>Centrale-ville</p>
                                </div>
                                
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                    <Col sm="4" className="pt-3" style={{position: 'relative'}}> 
                        <h4 className="font-weight-bold float-right mr-5" style={{color: colorPink}}>1500 <span>F cfa</span></h4>
                         <br/>

                         <ul class="list-inline" style={{position: "absolute", right: "5em", bottom: "0"}}>
                            <li class="list-inline-item  rounded-circle text-center mt-5 mr-0 " style={{width: '30px', height: '30px', backgroundColor: "#B2B0B0"}}><a class="social-icon text-xs-center" target="_blank" href="#"><Image src="/images/icons/walker.png" /></a></li>
                            <li class="list-inline-item  rounded-circle text-center mt-5 mr-0 " style={{width: '30px', height: '30px', backgroundColor: "#B2B0B0"}}><a class="social-icon text-xs-center" target="_blank" href="#"><Image src="/images/icons/walker.png" /></a></li>
                            <li class="list-inline-item  rounded-circle text-center mt-5 mr-0 pt-1" style={{width: '30px', height: '30px', background: colorPink}}><a class="social-icon text-xs-center" target="_blank" href="#"><Image src="/images/icons/walker.png" /></a></li>
                            <li class="list-inline-item  rounded-circle text-center mt-5 mr-0 " style={{width: '30px', height: '30px', backgroundColor: "#B2B0B0"}}><a class="social-icon text-xs-center" target="_blank" href="#"><Image src="/images/icons/walker.png" /></a></li>
                        </ul>
                                                   
                       
                    </Col>
                </Row>
            </div>)
}



export default CovoitureListCard;