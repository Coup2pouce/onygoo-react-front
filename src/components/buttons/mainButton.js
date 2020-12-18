import { makeStyles } from "@material-ui/core";
import { isMobile } from "react-device-detect";



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

const MainButton = (props) => {
    const {color, title, w, h, action, s} = props
    const classes = useStyles();
    return (<button 
    className={classes.mbtn} 
    style={{backgroundColor: color, fontSize: `${s}px`, height:`${h}px`, width: "100%"}}
    onClick={() => action()}>
      {title}
    </button>)

}

export default MainButton;