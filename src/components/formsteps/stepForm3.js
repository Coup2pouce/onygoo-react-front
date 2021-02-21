import {Row, Col, Form, Container, Card, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { colorGray, colorPink, mainBlue } from '../../constants/colors';
import { nextStep, prevStep } from '../../redux/actions';
import MainButton from '../buttons/mainButton';
import store from '../../redux/store/index'
import Indicator from './indicator';
import CustomSelect from '../select/select';
import IconButton from '../buttons/iconButton';
import { ArrowBackIos, InfoOutlined, InfoRounded, InfoSharp } from '@material-ui/icons';

const ConnectedStepForm3  = (props) => {

    const options =  [{ value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },];
    
    const step = 4;
  
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
                <p style={{fontSize: "36px", fontWeight: "bold", color: mainBlue}}>Quelle est l'immatriculation ?</p>
                <Row className="mt-5">
                    <Col>
                       <Form.Group>
                        <Form.Label>Plaque d'immatriculation</Form.Label>
                        <Form.Control type="text"   />
                       </Form.Group>
                    </Col>
               </Row>
                <Row className="mt-5">
                    <Col>
                       <Form.Group>
                        <Form.Label>Pays d'immatriculation</Form.Label>
                           <CustomSelect  options={options} />
                       </Form.Group>
                    </Col>
               </Row>

               <Row className="mt-5">
                    <Col>
                       <Form.Group>
                        <Form.Label>Années d'immatriculation</Form.Label>
                           <CustomSelect  options={options} />
                       </Form.Group>
                    </Col>
               </Row>
               <span className="text-muted">
                   <InfoOutlined className="mr-3" />
                   Information indiquée sur la carte grise.</span>
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

  const StepForm3 = connect(mapStateToProps, mapDispatchToProps)(ConnectedStepForm3);



export default StepForm3;