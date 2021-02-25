import { SearchOutlined } from "@material-ui/icons";

import { Nav, Navbar, Image } from "react-bootstrap";
import MainButton from "../buttons/mainButton";
import { mainBlue } from '../../constants/colors';
import { useHistory } from "react-router-dom";
import { HOME, INSCRIREVOITURE } from "../../constants/routes";


const MainNavbar = (props) => {

    const history = useHistory();

    const onRegister = () => {
        history.push(INSCRIREVOITURE);
    }

    const backHome = () => {
        history.push(HOME);
    }
    return (
        <Navbar bg="" expand="lg" fixed="top" style={{fontSize:"12px", padding:"0 5em", backgroundColor: "#F6F5F7"}}>
            <Navbar.Brand onClick={backHome}>
                <Image src="/images/logo.png" height="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#home" className="mt-2">
                    <SearchOutlined />
                </Nav.Link>
                <Nav.Link href="#home" className="mt-2">Aide</Nav.Link>
                <Nav.Link href="#home" className="mt-2">Connexion</Nav.Link>
                <Nav.Link href="#link" className="mt-2">Nous rejoindre</Nav.Link>
                <Nav.Link className="mx-2">
                    <MainButton title="inscrire votre véhicule" color={mainBlue} s={12} action={onRegister}/>
                </Nav.Link>
                <Nav.Link href="#home" className="mt-2 ml-2">
                   <Image src="/images/Icon awesome-facebook-f.png" height="18px"  />
                </Nav.Link>
                <Nav.Link href="#home" className="mt-2">
                   <Image src="/images/Icon awesome-twitter.png" height="18px" />
                </Nav.Link>
                <Nav.Link href="#link" className="mt-2">
                   <Image src="/images/Icon metro-instagram.png" height="18px" />
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default MainNavbar;

