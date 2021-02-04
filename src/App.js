import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {  COVOITURAGEDETAILS, COVOITURAGELIST, HOME, INSCRIREVOITURE, LOCATIONDETAILS, LOCATIONLIST } from './constants/routes';
import Home from './pages/home/index';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/navbar/index';
import Footer from './components/footer';
import { Provider } from "react-redux";
import store from "./redux/store/index";
import LocationListe from './pages/locationVoitureListe';
import LocationDetails from './pages/locationVoitureDetail';
import CovoiturageListe from './pages/covoiturageVoitureListe';
import CovoiturageDetails from './pages/covoiturageVoitureDetail';
import InscrireVoiture from './pages/inscrireVoiture';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Container fluid className="p-0">
        <MainNavbar/>
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route exact path={LOCATIONLIST} component={LocationListe} />
            <Route exact path={LOCATIONDETAILS}  component={LocationDetails} />
            <Route exact path={COVOITURAGELIST}  component={CovoiturageListe} />
            <Route exact path={COVOITURAGEDETAILS}  component={CovoiturageDetails} />
            <Route exact path={INSCRIREVOITURE}  component={InscrireVoiture} />
          </Switch>
        <Footer />
    </Container>
    </Provider>
    </Router>
    
  );
}

export default App;
