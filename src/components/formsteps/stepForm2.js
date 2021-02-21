import {Row, Col, Form, Container, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import { colorGray, colorPink, mainBlue } from '../../constants/colors';
import { nextStep, prevStep } from '../../redux/actions';
import MainButton from '../buttons/mainButton';
import store from '../../redux/store/index'
import Indicator from './indicator';
import CustomSelect from '../select/select';
import { ArrowBackIos } from '@material-ui/icons';

const ConnectedStepForm2  = (props) => {

    const options =  [{ value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },];
    
    const step = 3;
  
    const  goNexStep = () => {
        props.nextStep(step+1)
     }
     const  gotBackStep = () => {
        props.prevStep(step-1)
     }

  

    return (
        <Card body className="mt-5"  style={{backgroundColor: colorGray}}>
            <Indicator />
            <Container>
                <h5 style={{fontSize: "22px", fontWeight: "bold", textTransform: "uppercase"}}>inscrice ma voiture</h5>
                <p style={{fontSize: "36px", fontWeight: "bold", color: mainBlue}}>Le kilométrage est-il juste ?</p>

                <Row className="mt-5">
                    <Col>
                       <Form.Group>
                        <Form.Label>Kilométrage</Form.Label>
                        <CustomSelect  options={options} />
                       </Form.Group>
                    </Col>
               </Row>
               
               <div className="mt-5" />
               <p className="text-right">
                 <btn 
                  className="btn btn-outline-light mr-5" 
                  style={{color: mainBlue, fontSize: "18px", fontWeight: "600"}}
                  onClick={gotBackStep}
                  >
                      <ArrowBackIos />
                      Précédent
                  </btn>
                  <MainButton title="Commencer" action={goNexStep} color={colorPink} />
               </p>
            </Container>
        </Card>
    )
}

const mapStateToProps = state => {
    return { formStep: state.formStep };
  };

function mapDispatchToProps(dispatch) {
    return {
      nextStep: formStep => dispatch(nextStep(formStep)),
      prevStep: formStep => dispatch(prevStep(formStep))
    };
  }

  const StepForm2 = connect(mapStateToProps, mapDispatchToProps)(ConnectedStepForm2);



export default StepForm2;