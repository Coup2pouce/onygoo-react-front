import { connect } from "react-redux";
import { colorGray, colorPink } from "../../constants/colors";
import { useLocalStorage } from "../../helpers/hooks";
import store from "../../redux/store";

const ConnectedIndicator = (props) => {
    const [step, setStep] = useLocalStorage('step');
   store.subscribe(() => {
       setStep(store.getState().formStep);
   })

   return (
   <div style={{backgroundColor: "#F1F1F4", width: "80%", height: "50px", margin:"2em auto", padding:".6em 2em 0 2em"}}>
        <div style={{backgroundColor: colorPink, width: `${step*2}0%`, height: "30px"}}></div>
   </div>)
}


const mapStateToProps = state => {
    return { formstep: state.formStep };
  };
  const Indicator = connect(mapStateToProps)(ConnectedIndicator);
  
  
  export default Indicator;