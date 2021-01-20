import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DETAILS, HOME, PRODUCTLIST } from './constants/routes';
import Home from './pages/home/index';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/navbar/index';
import MainFooter from './components/footer/index';
import ProductList from './pages/productList';
import Details from './pages/details';

function App() {
  return (
    <Container fluid className="p-0">
      <MainNavbar />
      <Router>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={PRODUCTLIST} component={ProductList} />
          <Route exact path={DETAILS} component={Details} />
        </Switch>
      </Router>
     <MainFooter/>
    </Container>
  );
}

export default App;
