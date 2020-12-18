import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HOME } from './constants/routes';
import Home from './pages/home/index';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/navbar/index';

function App() {
  return (
    <Container fluid className="p-0">
      <MainNavbar />
      <Router>
        <Switch>
          <Route exact path={HOME} component={Home} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
