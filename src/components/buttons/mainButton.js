import { makeStyles } from "@material-ui/core";
import { isMobile } from "react-device-detect";



const useStyles = makeStyles((theme) => ({
  mbtn:{
      outline: "none",
      border: "0px",
      padding: ".5em 1.5em",
      color: "#ffffff",
      fontSize: "22px",
    "&:focus":{
      outline: "none",

    }
  }
}))

const MainButton = (props) => {
    const {color, c, title, w, h, action, cl ,s, fontsize} = props
    const classes = useStyles();
    return (<button 
    className={classes.mbtn} 
    style={{backgroundColor: color ,class: `${cl}`, color: `${c}`, fontSize: `${s}px`, height:`${h}px`, width: `${w}`, fontWeight: `${fontsize}`}}
    onClick={() => action()}>
      {title}
    </button>)

}

export default MainButton;