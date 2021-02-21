import { Container} from "react-bootstrap";
import { connect } from "react-redux";
import Step1 from "../../components/formsteps/step1";
import StepForm1 from "../../components/formsteps/stepform1";
import StepForm2 from "../../components/formsteps/stepForm2";
import StepForm3 from "../../components/formsteps/stepForm3";
import StepForm4 from "../../components/formsteps/stepForm4";

import { useLocalStorage } from "../../helpers/hooks";
import store from "../../redux/store";

const ConnectedInscrireVoiture = (props) => {

    const [step, setStep] = useLocalStorage('step', '1');

    store.subscribe(() =>{
       setStep(store.getState().formStep)
    })

    return <Container fluid style={{backgroundColor: "#F2F2F2F2", marginTop: "2em", width: "100%"}} className="p-5">
       {step == 1 ? <Step1 /> : ''} 
       {step == 2 ? <StepForm1 /> : ''} 
       {step == 3 ? <StepForm2 /> : ''} 
       {step == 4 ? <StepForm3 /> : ''} 
       {step == 5 ? <StepForm4 /> : ''} 

    </Container>

}



const mapStateToProps = state => {
    return { formStep: state.formStep };
  };

const InscrireVoiture  = connect(mapStateToProps)(ConnectedInscrireVoiture);

export default InscrireVoiture;

