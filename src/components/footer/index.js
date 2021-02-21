import { makeStyles } from "@material-ui/core";
import { Col, Image, Row } from "react-bootstrap";
import { darkBlue } from "../../constants/colors";

const useStyle = makeStyles(() => ({
   root:{
       position: "relative",
       width: "100%",
       height: "280px",
       backgroundColor: darkBlue,
       padding: "2em 2.5em",
       color: "#ffffff",
       bottom: 0,
       
       
       
       

   }
}))

const Footer = () => {
  const  classes = useStyle()
  return (<div className={classes.root}>
     
       <Row>
         <Col sm="3">
           <Image src="/images/wlogo.png" style={{height: "50px"}} />
           <p className="mt-5 ml-2">
            <Image src="/images/wfacebook.png" style={{width: "13px"}} />
            <Image src="/images/wtwitter.png" style={{width: "20px"}}  className="mx-4" />
            <Image src="/images/winstagram.png" style={{width: "20px"}}  />

          </p>
         </Col>
         <Col sm="3">
           <h3 style={{fontSize: "16px", fontWeight: "800", textTransform: "uppercase"}}>Société</h3>
           <p style={{fontSize: "12px", marginTop: "2em"}}>
             <span>Aide FAQ</span> <br/>
             <span>A propos de nous</span> <br/>
             <span>Presse</span> 
           </p>
         </Col>
         <Col sm="3">
           <h3 style={{fontSize: "16px", fontWeight: "800", textTransform: "uppercase"}}>Location</h3>
           <p style={{fontSize: "12px", marginTop: "2em"}}>
             <span>Comment ça marche</span> <br/>
             <span>Enrégistrer ma voiture</span> <br/>
             <span>Louer une voiture</span>
             <span>Assurance</span> 
           </p>
         </Col>
         <Col sm="3">
           <h3 style={{fontSize: "16px", fontWeight: "800", textTransform: "uppercase"}}>Blog</h3>
           <p style={{fontSize: "12px", marginTop: "2em"}}>
             <span>Pourquoi vous gagnez plus</span> <br/>
             <span>Avec OnyGoo</span> <br/>
           </p>
         </Col>
       </Row>

       <p style={{fontSize: "12px", marginTop: "4em"}}>&#169; OnyGoo 2020 - Conditions générales | press | Team | Job  </p>
       
  </div>)

}



export default  Footer;