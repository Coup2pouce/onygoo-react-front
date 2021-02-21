import {Row, Col, Form, Container, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import { colorGray, colorPink, mainBlue } from '../../constants/colors';
import { nextStep, prevStep } from '../../redux/actions';
import MainButton from '../buttons/mainButton';
import store from '../../redux/store/index'
import Indicator from './indicator';
import CustomSelect from '../select/select';

const ConnectedStepForm1  = (props) => {

    const options =  [{ value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },];
    
    const step = 2;
  
    const  goNexStep = () => {
        props.nextStep(step+1)
     }

    store.subscribe(() => {
      console.log(store.getState().formStep)
    })

    return (
        <Card body className="mt-5"  style={{backgroundColor: colorGray}}>
            <Indicator />
            <Container>
                <h5 style={{fontSize: "22px", fontWeight: "bold", textTransform: "uppercase"}}>inscrice ma voiture</h5>
                <p style={{fontSize: "36px", fontWeight: "bold", color: mainBlue}}>Confirmez le model de votre voiture</p>

                <Row className="mt-5">
                    <Col>
                       <Form.Group>
                        <Form.Label>Marque</Form.Label>
                        <CustomSelect  options={options} />
                       </Form.Group>
                    </Col>
               </Row>
               <Row className="mt-5">
                    <Col>
                       <Form.Group>
                        <Form.Label>Modéle</Form.Label>
                        <CustomSelect  options={options} />
                       </Form.Group>
                    </Col>
               </Row>
               <div className="mt-5" />
               <p className="text-right">
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

  const StepForm1 = connect(mapStateToProps, mapDispatchToProps)(ConnectedStepForm1);



export default StepForm1;