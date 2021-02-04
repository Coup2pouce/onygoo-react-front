
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { colorPink } from "../../constants/colors";
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { LocationOn } from '@material-ui/icons';
import MaterialUIPickers from '../picker/datePicker';
import CustomNumberInput from '../header/customInput';
import MainButton from '../buttons/mainButton';
import { isMobile } from 'react-device-detect';


const CovoitureSearchPanel = (props) => {

    return (<Container fluid style={{
        position: "relative",
        top: "8",
        backgroundColor: colorPink,
        padding: "3em 0 2em 8em",
       
        width: "100%",
    }}>    
             <Form>
                <Row>
                    <Col className="p-0" sm="3">
                            <InputGroup >
                                <InputGroup.Prepend >
                                <InputGroup.Text id="start" style={{border: "none", borderRadius: "0", background: "#FFFFFF", width: "60px",}}>
                                    <LocationOn style={{ fontSize: "36px"}} />
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="search"
                                placeholder="Départ" style={{height: "80px", borderRadius: "0px", border: "none"}}
                                aria-describedby="Départ"
                                />
                            </InputGroup>
                        </Col>
                        <Col className="" sm="3">
                            <InputGroup >
                                <InputGroup.Prepend >
                                <InputGroup.Text id="start" style={{border: "none", borderRadius: "0", background: "#FFFFFF", width: "60px",}}>
                                    <LocationOn style={{ fontSize: "36px"}} />
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="search"
                                placeholder="Déstination" style={{height: "80px", borderRadius: "0px", border: "none"}}
                                aria-describedby="destination"
                                />
                            </InputGroup>
                        </Col>
                        <Col sm="2"  className="p-0">
                            <div className="pt-2"  style={{height: "80px", borderRadius: "0px", border: "none", width: "100%", backgroundColor: "#FFFFFF"}}>
                            <MaterialUIPickers />
                            </div>
                            
                            
                        </Col>
                        <Col sm="3" style={{margin: isMobile? ".5em 0": "0"}} className="px-2" >
                            <CustomNumberInput />
                        </Col>
                    </Row>
                </Form>
            </Container>)

}
export default CovoitureSearchPanel;

