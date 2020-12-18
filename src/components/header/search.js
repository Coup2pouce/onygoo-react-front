import { Container, makeStyles } from "@material-ui/core";
import { CalendarToday, LocationOn } from "@material-ui/icons";
import { useState } from "react";
import { Col, Row, Form, InputGroup } from "react-bootstrap";
import { mainBlue } from '../../constants/colors';
import MainButton from "../buttons/mainButton";
import { isMobile } from 'react-device-detect';

const useStyle = makeStyles(() => ({
   root:{
       
     marginTop: '3em'  

   },
   toogle:{
       width: "60%",
       margin: "0 auto"
   },
   mbtn:{
       backgroundColor:"transparent",
       outline: "none",
       border: "0px",
       width: "100%",
       textTransform: "uppercase",
       fontWeight: "bolder",
       fontSize: "18px",
       padding: ".8em 0",
       color: "#ffffff",
       "&:focus":{
           outline: "none"
       },

   },
   lbtn:{
    backgroundColor:"transparent",
    outline: "none",
    border: "0px",
    width: "100%",
    textTransform: "uppercase",
    fontWeight: "bolder",
    fontSize: "18px",
    padding: ".8em 0",
    color: "#ffffff",
    "&:focus":{
        outline: "none"
    }}
    ,
    mbar:{
        backgroundColor: mainBlue,
        height: "10px",
        width: "100%",
        
    }
}))

const SearchBar = () => {

  const onSearch = () => {
      console.log('ok from search')
  }

  const [toogle, setToogle] = useState(false)
  const  classes = useStyle();
  return (<div className={classes.root}>
       <Container>
           <div className={classes.toogle}>
                <Row className="p-0 m-0">
                    <Col sm="6" style={{ backgroundColor: !toogle ? mainBlue : '',marginBottom: isMobile ? ".5em": "0"}} className="p-0 m-0" sm>
                       <button 
                       className={classes.mbtn} 
                       style={{height: toogle ? "55px" : "65px"}}
                       onClick={() => {
                           setToogle(false)
                       }}>
                         Location de voiture
                       </button>
                       {toogle ? <div className={classes.mbar}></div> : ''} 

                    </Col>
                    <Col sm="6" style={{ backgroundColor: toogle? mainBlue : ''}}  className="p-0 m-0" sm>
                      <button 
                      className={classes.lbtn} 
                      style={{height: toogle ? "65px" : "55px"}}
                      onClick={() => {
                        setToogle(true)
                    }}>
                         Covoiturage
                      </button>
                     {!toogle ? <div className={classes.mbar}></div> : ''} 
                    </Col>
                </Row>

                <Form className="mt-4">
                    <Row className="my-3">
                        <Col >
                            <InputGroup >
                                <InputGroup.Prepend >
                                <InputGroup.Text id="address" style={{border: "none", borderRadius: "0"}}>
                                    <LocationOn />
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Adresse précise..." style={{height: "55px", borderRadius: "0px"}}
                                aria-describedby="address"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="5" >
                            <InputGroup >
                                <InputGroup.Prepend >
                                <InputGroup.Text id="start" style={{border: "none", borderRadius: "0"}}>
                                    <CalendarToday />
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Déput" style={{height: "55px", borderRadius: "0px"}}
                                aria-describedby="start"
                                />
                            </InputGroup>
                        </Col>
                        <Col sm="4" style={{margin: isMobile? ".5em 0": "0"}} >
                            <InputGroup >
                                <InputGroup.Prepend >
                                <InputGroup.Text id="end" style={{border: "none", borderRadius: "0", width: "100%"}}>
                                    <CalendarToday />
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Fin" style={{height: "55px", borderRadius: "0px"}}
                                aria-describedby="end"
                                />
                            </InputGroup>
                        </Col>
                        <Col sm="3">
                           <MainButton color={mainBlue} title="Rechercher" h={55}  action={onSearch}  />
                        </Col>
                    </Row>
                </Form>
           </div>
       </Container>
  </div>)

}



export default  SearchBar;