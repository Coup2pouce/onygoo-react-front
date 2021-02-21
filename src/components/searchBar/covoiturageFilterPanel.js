import { Button, Divider } from '@material-ui/core';
import { ButtonGroup, Col, Form, Row } from 'react-bootstrap'
import CustomRangelider from '../slider/customRangeSlider';
import './style.css'
const  CovoiturageFilterPanel = (props) => {

    return (<div className="filter-panel p-5">
        <Row className="mt-5">
            <Col className="text-left">
                <p className="font-weight-bold " style={{fontSize: '22px', color: "#147EE9", marginTop:'-3em'}}>Rayon</p>
                <CustomRangelider />
            </Col>
        </Row>

        <Row>
            
        </Row>

        <Row className="mt-5">
            <Col className="text-center">
                <Button>Afficher tous les types</Button>
            </Col>
        </Row>

        <Row className="mt-5">
            <Col className="text-center">
                <Divider/>
            </Col>
        </Row>

        <Row className="mt-5">
            <Col className="text-left">
                <p>Type de <br/> Carburant</p>
            </Col>
        </Row>

        <Row>
            <Col>
                <ButtonGroup className="border">
                    <Button variant="neutral" className="border bg-white" style={{borderRadius: '0px'}}>Essence</Button>
                    <Button variant="neutral" className="border bg-white" style={{borderRadius: '0px'}}>Diesel</Button>
                    <Button variant="neutral" className="border bg-white" style={{borderRadius: '0px'}}>Hybride</Button>
                    <Button variant="neutral" className="border bg-white" style={{borderRadius: '0px'}}>Electrique</Button>
		        </ButtonGroup>
            </Col>
        </Row>

        <Row className="mt-5">
            <Col className="text-left">
                <p className="font-weight-bold " style={{fontSize: '18px', color: "#313E73"}}>Prix total</p>
                <p className="text-center text-muted">Tous les prix</p>
                <CustomRangelider />
            </Col>
        </Row>

        <Row className="mt-5">
            <Col className="text-left">
                <Button className="bg-white btn-block  border py-3 text-primary">Plus de filtres</Button>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col className="text-left">
                <Button className="text-primary text-capitalize">Réinitialiser les filtres</Button>
            </Col>
        </Row>
        
    </div>)
}

export default CovoiturageFilterPanel;