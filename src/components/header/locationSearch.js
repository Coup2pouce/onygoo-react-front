import { Container, makeStyles } from "@material-ui/core";
import { CalendarToday, LocationOn } from "@material-ui/icons";
import { useState } from "react";
import { Col, Row, Form, InputGroup } from "react-bootstrap";
import { colorPink, mainBlue } from '../../constants/colors';
import MainButton from "../buttons/mainButton";
import { isMobile } from 'react-device-detect';
import { toggleApp } from "../../redux/actions";
import { connect } from "react-redux";
import store from "../../redux/store";
import { useHistory } from "react-router-dom";
import { LOCATIONLIST } from "../../constants/routes";



const useStyle = makeStyles(() => ({
   root:{
       
     marginTop: '3em'  

   },
   toogle:{
       width: "80%",
       margin: "0 auto"
   },
   mbtn:{
    backgroundColor:"transparent",
    outline: "none",
    border: "0px",
    width: "100%",
    textTransform: "uppercase",
    fontWeight: "800",
    fontSize: "20px",
    padding: "1.5em",
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
    fontWeight: "800",
    fontSize: "20px",
    padding: "1.5em",
    color: "#ffffff",
    "&:focus":{
        outline: "none"
    },}
    ,
    
    mbar:{
        backgroundColor: colorPink,
        height: "10px",
        width: "100%",
        
    },
    mbar1:{
        backgroundColor: mainBlue,
        height: "10px",
        width: "100%",
        
    }
}))

const ConnectedLocationSearch = (props) => {
  const {mode} = props;
  const history = useHistory();


  const onSearch = () => {
     history.push(LOCATIONLIST)
      console.log('ok from search')
  }


  

  const  classes = useStyle();
  return (<div className={classes.root}>
       <Container fluid>
           <div className={classes.toogle}>
                <Row className="p-0 m-0">
                    <Col sm="6" style={{ backgroundColor: mode ==  1 ? mainBlue : '',marginBottom: isMobile ? ".5em": "0"}} className="p-0 m-0" sm>
                       <button 
                       className={classes.mbtn} 
                       style={{height: mode == 0 ? "80px" : "65px"}}
                       onClick={() => {
                        props.toggleApp(1)
                       }}>
                         Location de voiture
                       </button>
                       {mode  == 0 ? <div className={classes.bar}></div> : ''} 

                    </Col>
                    <Col sm="6" style={{ backgroundColor: mode == 0 ? colorPink : ''}}  className="p-0 m-0" >
                      <button 
                      className={classes.lbtn} 
                      style={{height: mode == 0 ? "65px" : "80px"}}
                      onClick={() => {
                        props.toggleApp(0)
                    }}>
                         Covoiturage
                      </button>
                      {mode  == 1 ? <div className={classes.mbar}></div> : ''}
                    </Col>
                </Row>

                <Form className="mt-4">
                    <Row className="my-3">
                        <Col className="p-0" >
                            <InputGroup >
                                <InputGroup.Prepend >
                                <InputGroup.Text id="start" style={{border: "none", borderRadius: "0", background: "#FFFFFF", width: "60px",}}>
                                    <LocationOn style={{ fontSize: "36px"}} />
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Adresse précise..." style={{height: "80px", borderRadius: "0px", border: "none"}}
                                aria-describedby="address"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col sm="5" className="p-0">
                            <InputGroup >
                                <InputGroup.Prepend >
                                <InputGroup.Text id="start" style={{border: "none", borderRadius: "0", background: "#FFFFFF", width: "60px",}}>
                                    <CalendarToday style={{ fontSize: "36px"}} />
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Déput" style={{height: "80px", borderRadius: "0px", border: "none"}}
                                aria-describedby="start"
                                />
                            </InputGroup>
                        </Col>
                        <Col sm="4" style={{margin: isMobile? ".5em 0": "0"}} className="px-2" >
                            <InputGroup >
                                <InputGroup.Prepend >
                                <InputGroup.Text id="start" style={{border: "none", borderRadius: "0", background: "#FFFFFF", width: "60px",}}>
                                    <CalendarToday style={{ fontSize: "36px"}} />
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Fin" style={{height: "80px", borderRadius: "0px",  border: "none"}}
                                aria-describedby="end"
                                />
                            </InputGroup>
                        </Col>
                        <Col sm="3" className="p-0">
                           <MainButton color={mainBlue} title="Rechercher" h={80} w="100%"  action={onSearch}  />
                        </Col>
                    </Row>
                </Form>
           </div>
       </Container>
  </div>)

}

const mapStateToProps = state => {
    return { mode: state.mode };
  };

  function mapDispatchToProps(dispatch) {
    return {
      toggleApp: mode => dispatch(toggleApp(mode))
    };
  }

const LocationSearch = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectedLocationSearch);
  

export default  LocationSearch;