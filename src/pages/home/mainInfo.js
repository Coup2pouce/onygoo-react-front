import { makeStyles } from '@material-ui/core';
import { PlayArrowOutlined } from '@material-ui/icons';
import {Row, Col, Image, Container, Button } from 'react-bootstrap';
import { darkBlue, mainBlue } from '../../constants/colors';
import { isMobile } from 'react-device-detect';

const useStyle = makeStyles((theme) => ({
   pbtn:{

    position: "absolute",
    width: "85px",
    height: "85px",
    border: "2px solid #ffffff",
    borderRadius: "50%",
    top: "45%",
    left: "50%",
    color: "#ffffff",
    cursor: "pointer",
       "&:hover":{
           color: mainBlue
       }
   }
}));


const MainInfo = () =>  {

   const classes = useStyle()
  return (
    <Container fluid className="mt-5 p-0 mb-2">
        <Row>
            <Col md={6}>
                <div 
                style={{
                    position: "relative", 
                    backgroundImage: "url('/images/side.png')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "520px"
                    }} >
                 <div className={classes.pbtn}>
                    <PlayArrowOutlined style={{fontSize: "82px"}}/>
                 </div>
                </div>
            </Col>
            <Col md={6} style={{color: darkBlue, marginTop: isMobile ? ".5em" : "0"}} className="py-5">
                <h2 className="ml-5 mb-3" style={{fontWeight: "bold", fontSize: "26px"}}>
                    Vous avez un voiture ? <br/>
                    Rentabilssez-la sur OnyGoo !
                </h2>

                <p className="ml-5">
                    Si vous possédez un véhicule, mettez-le en location, <br/>
                    pour qu'il paie ses factures tout seul. Nous sommes la pour que, <br/>
                    la confiance régne, en assurant les services et en veillant à leur <br/>
                    bon déroulement.
                </p>
                <ul className="p-0 my-3" style={{listStyle: "none", fontSize: isMobile ? "16px" :"26px"}}>
                    <li className="mb-2">
                        <span className="mr-4"><Image src="/images/arrow.png" width="20px" height="20px" /></span>
                        <span style={{ fontWeight: "bold"}}>Louez pour une heure ou plusieurs jours</span>
                    </li>
                    <li className="mb-2">
                        <span className="mr-4"><Image src="/images/arrow.png" width="20px" height="20px" /></span>
                        <span style={{fontWeight: "bold"}}>Gérer tout depuis l'Application</span>
                    </li>
                    <li className="mb-2">
                        <span className="mr-4"><Image src="/images/arrow.png" width="20px" height="20px" /></span>
                        <span style={{ fontWeight: "bold"}}>Des voitures en bas de chez vous</span>
                    </li>

                </ul>
                <Button className="ml-5 mt-4 py-3 px-4" style={{backgroundColor: "#ffffff", color: darkBlue, border:`1px solid ${darkBlue}`, fontSize: "18px"}}>
                   Voir comment ça marche
                </Button>
            </Col>
        </Row>
    </Container>
  );
}

export default MainInfo;
