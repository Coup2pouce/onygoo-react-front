import { Container, Form , Col} from "react-bootstrap";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { InputText } from "primereact/inputtext";
import "./style.css"


const SearchBar = (props) => {

    return (<Container fluid style={styles}>
             <div className="row">
                    <div className="col-sm-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon" >
                              <i className="pi pi-map-marker"></i>
                            </span>
                            <InputText className="input" placeholder="Adresse précise..." type="text" />
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-6">
                                <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon" >
                                            <i class="pi pi-calendar"></i>
                                        </span>
                                        <InputText className="input" placeholder="Mer 4 Avr. à 08:00" type="text" />
                                </div>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon" >
                                            <i class="pi pi-calendar"></i>
                                        </span>
                                        <InputText className="input" placeholder="Username" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon" >
                              <img src="images/icons/trajet.png" width="36px" />
                            </span>
                            <Form.Control as="select" className="input">
                                <option>100 km</option>
                                <option>200 km</option>
                                <option>300 km</option>
                                <option>400 km</option>
                                <option>500 km</option>
                            </Form.Control>
                        </div>
                    </div>
                </div>
        
            </Container>)

}
export default SearchBar;


const styles = {
    backgroundColor: "#0098EA",
    padding: "2em"
}