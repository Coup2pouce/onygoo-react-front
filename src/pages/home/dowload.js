import { makeStyles } from '@material-ui/core';
import { Apple, PlayArrow, PlayCircleFilledRounded } from '@material-ui/icons';
import { Row, Col, Container, Image, Button} from 'react-bootstrap';
import { darkBlue } from '../../constants/colors';


const useStyle = makeStyles((theme) => ({
   root:{
       padding: "1em 6em"
   }
}));


const Download = () =>  {

  const classes = useStyle()
  return (
    <Container   className={classes.root}>

        <Row>
            <Col>
              <h2 style={{color: darkBlue, fontSize: "38px", fontWeight: "bold"}}>Télécharger notre App</h2>
              <p style={{color: darkBlue, fontSize: "16px"}}>Apportez OnyGoo avec vous quand vous êtes en déplacement</p>
              <Row className="mt-5" style={{fontSize: "12px"}}>
                  <Col xs="4">
                   <Image src="/images/wallet.png" /> <br/>
                   <span className="mt-2">Malin & Économique</span>
                  </Col>
                  <Col xs="4">
                    <Image src="/images/jet.png" /> <br/>
                   <span className="mt-2">Rapide & Flexible</span>
                  </Col>
                  <Col xs="4">
                    <Image src="/images/social.png" /> <br/>
                   <span className="mt-2">Social & Durable</span>
                  </Col>
              </Row>
              <Row className="mt-4">
                <Col className="mt-2">
                  <Button className="d-flex text-left" style={{height: "54px", width:"160px", backgroundColor: "black"}} >
                      <Image  src="/images/icons/gps.png" style={{width: "36px", height: "36px"}} />

                      <p className="ml-1" >
                        <span style={{fontSize: "11px"}}> GET IT ON</span><br/>
                        <p style={{fontSize: "14px", marginTop: "-.5em", fontWeight:"bold"}}> Google Play</p>
                      </p>
                  </Button>
                </Col>
                <Col className="mt-2">
                  <Button className="d-flex text-left" style={{height: "54px", width:"160px", backgroundColor: "black"}} >
                      <Apple style={{width: "42px", height: "42px"}} />

                      <p className="ml-1" >
                        <span style={{fontSize: "11px"}}> Download on the</span><br/>
                        <p style={{fontSize: "14px", marginTop: "-.5em", fontWeight:"bold"}}> App Store</p>
                      </p>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Image src="/images/carrapide.png" style={{float: "right", width: "275px"}}/>
            </Col>

        </Row>
         
    </Container>
  );
}

export default Download;
