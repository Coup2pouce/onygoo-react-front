import { makeStyles } from "@material-ui/core";
import { Image } from "react-bootstrap";



const useStyles = makeStyles((theme) => ({
  mbtn:{
      outline: "none",
      border: "0px",
      padding: ".5em 1.5em",
      color: "#ffffff",
    "&:focus":{
      outline: "none",

    }
  }
}))

const IconButton = (props) => {
  const {color,w, h, action, s, icon} = props
    const classes = useStyles();
    return (<button 
    className={classes.mbtn} 
    style={{backgroundColor: color, fontSize: `${s}px`, height:`${h}px`, width: `${w}px`}}
    onClick={() => action()}>
     <Image src={icon} height="20px" />
    </button>)

}

export default IconButton;