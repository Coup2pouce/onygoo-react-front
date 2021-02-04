import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";


const useStyle = makeStyles(() => ({
   root:{
       width: "100%",
       padding: "1.1em 10px",
       backgroundColor: "#FFFFFF",
       
   },
   btn:{
       display: "inline-block",
       width: "40px",
       height: "40px",
       borderRadius: "50%",
       border: "2px solid gray",
       textAlign: "center",
       fontSize: "26px",
       fontWeight: "bolder",
       cursor: "pointer"
   }
}))

const CustomNumberInput = () => {

  const [passager, setPassager] = useState(0);
  const  classes = useStyle()
  return (<div className={classes.root}>
      <Row>
          <Col xs="5" className="text-muted" style={{marginTop: ".55em"}}><span>Passager</span></Col>
          <Col xs="2"><span className={classes.btn} onClick={() => setPassager(passager-1)}>-</span> </Col>
          <Col xs="3" className="text-center mt-1 font-weight-bolder" style={{fontSize: "26px"}}>{passager}</Col>
          <Col xs="2"><span className={classes.btn} onClick={() => setPassager(passager+1)}>+</span> </Col>
      </Row>
     
  </div>)

}



export default  CustomNumberInput;