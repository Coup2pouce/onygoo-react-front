import { Container } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import CarCard2 from "../../components/cards/carCard2";

const list = [
    {
        id: 1,
        name: "Renault Clio Limited",
        price: "5000",
        location: "Dakar",
        year: "2002",
        type: "Automatique",
        image: "/images/cars/car1.jpg",
        stars: 3
    },
    {
        id: 2,

        name: "4x4",
        price: "5000",
        location: "Dakar",
        year: "2000",
        type: "Automatique",
        image: "/images/cars/car2.jpg",
        stars: 5
    },
    {
        id: 3,

        name: "Berline",
        price: "5000",
        location: "Dakar",
        year: "2011",
        type: "Automatique",
        image: "/images/cars/car3.jpg",
        stars: 2
    },
    {
        id: 4,

        name: "Berline",
        price: "5000",
        location: "Dakar",
        year: "2011",
        type: "Automatique",
        image: "/images/cars/car3.jpg",
        stars: 2
    }
];


const ProductList = () => {

    return <div  style={{margin: "8em 0 5em 0", width: "100%", padding:"0 1.5em"}}>
        <Row>
            <Col sm="4">

            </Col>
            <Col sm="8">
                 <Row>
                     {
                         list.map((item) => <Col sm="6" className="mt-4">
                             <CarCard2 post={item} />
                         </Col> )
                     }
                     
                    
                 </Row>
            </Col>
        </Row>
    </div>
}



export default ProductList;