import { Row, Col, Container } from "react-bootstrap";
import CarCard from "../cards/carCard";

const list = [
    {
        name: "Renault Clio Limited",
        price: "5000",
        location: "Dakar",
        year: "2002",
        type: "Automatique",
        image: "/images/cars/car1.jpg",
        stars: 3
    },
    {
        name: "4x4",
        price: "5000",
        location: "Dakar",
        year: "2000",
        type: "Automatique",
        image: "/images/cars/car2.jpg",
        stars: 5
    },
    {
        name: "Berline",
        price: "5000",
        location: "Dakar",
        year: "2011",
        type: "Automatique",
        image: "/images/cars/car3.jpg",
        stars: 2
    }
];

const CarList = () => {
    
    return (<Container style={{position: "relative", top: 15}} className="mt-5" >
          <div>
              <Row>
                {
                    list.map((car) => <Col sm="4" className="mt-2"><CarCard post={car} /></Col> )
                }
              </Row>
          </div>
    </Container>)
}


export default CarList;