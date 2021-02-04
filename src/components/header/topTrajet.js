import { makeStyles } from "@material-ui/core";
import { Col, Container, Row } from "react-bootstrap";
import { colorPink } from "../../constants/colors";
import TrajetButton from "../buttons/trajetBtn";

const useStyle = makeStyles(() => ({
root: {
    backgroundColor: colorPink,
    width: "100%",
    minHeight: "380px",
    marginBottom: "-2.97em"
    
},
h1:{
    fontSize: "36px",
    fontWeight: "bolder",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "1.3em"
},
h6:{
   color: "#FFFFFF",
   fontWeight: "500",
   fontSize: "20px",
   textAlign: 'right',
   marginTop: "-4em"
}

}))


const TopTrajet =  () => {

    const classes = useStyle();

    return <Container fluid className={classes.root}>

        <h1 className={classes.h1}>où allez-vous ?</h1>
        <p className={classes.h6}>Nos top trajets</p>
        <div className="px-5">
        <Row>
            {
                [1,2,3].map((trajet) => <Col sm="4"><TrajetButton /></Col>)
            }
        </Row>

        </div>
        
    </Container>

}



export default TopTrajet;