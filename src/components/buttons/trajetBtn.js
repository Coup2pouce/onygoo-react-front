import { makeStyles } from "@material-ui/core";
import { Image } from "react-bootstrap";
import { colorPink } from "../../constants/colors";



const useStyles = makeStyles((theme) => ({
  mbtn:{
      marginTop: "2em",
      display: "flex",
      outline: "none",
      border: "0px",
      padding: "1.2em 1.5em",

    "&:focus":{
      outline: "none",

    },
    width: "100%",
    borderRadius: "4px"

  }
}))

const TrajetButton = (props) => {
  const {trajet} = props
    const classes = useStyles();
    return (<button 
    className={classes.mbtn}>
     <p className="mt-3" style={{fontSize: "26px", fontWeight:"400",}}>
        <span>Dakar</span>
        <span style={{color: colorPink}}> {'>>'} </span>
        <span>AIBD</span>
     </p>

     <p style={{marginLeft: "44%", fontSize: "26px", fontWeight:"bolder", color: colorPink}} className="mt-3">
         1500 fcfa
     </p>
     
    </button>)

}

export default TrajetButton;