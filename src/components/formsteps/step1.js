import {Row, Col, Form, Image} from 'react-bootstrap';
import { connect } from 'react-redux';
import { colorPink, mainBlue } from '../../constants/colors';
import { nextStep, prevStep } from '../../redux/actions';
import MainButton from '../buttons/mainButton';
import store from '../../redux/store/index'

const ConnectedStep1  = (props) => {
    
    const step = 1;
  
    const  goNexStep = () => {
        props.nextStep(step+1)
     }

    store.subscribe(() => {
      console.log(store.getState().formStep)
    })

    

   
     
    return (
        <Row>
            <Col>
              <div className="mt-5" />
               <h1 style={{color: mainBlue, fontSize: "52px"}} className="text-center">Complétez vos revenus en <br/> Partageant votre voiture</h1>
              <div  className="py-5"/>
               <Row>
                    <Col>
                        <Form.Control placeholder="Volkswagen"  style={{height: "52px"}}/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Golf"  style={{height: "52px"}}/>
                    </Col>
               </Row>
              <div className="mt-4" />
               <Row>
                    <Col>
                        <Form.Control placeholder="2018" style={{height: "52px"}} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="100-150 000 km" style={{height: "52px"}} />
                    </Col>
               </Row>
               <div className="mt-4" />
               <Row>
                    <Col>
                        <Form.Control placeholder="Indiquez votre ville" style={{height: "52px"}} />
                    </Col>
                    <Col></Col>
               </Row>
              <div className="text-center mt-5">
              <div style={{paddingTop: "4em"}} />
            
              <MainButton title="commencer" color={colorPink} w="250px" fontsize="bold" action={goNexStep} />

              </div>
            </Col>
            <Col>
            <Image src="https://cdn.pixabay.com/photo/2014/04/02/16/22/bus-307098__340.png"  width="100%" />
            </Col>
        </Row>
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

  const Step1 = connect(mapStateToProps, mapDispatchToProps)(ConnectedStep1);



export default Step1;