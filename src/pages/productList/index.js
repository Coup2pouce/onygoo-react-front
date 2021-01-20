import { Col, Container, Row } from "react-bootstrap";
import CarCard2 from "../../components/cards/carCard2";
import FilterPanel from "../../components/searchBar/filterPanel";
import SearchBar from "../../components/searchBar/searchar";

const list = [
    {
        id: 1,
        name: "Renault Clio Limited",
        price: "5000",
        location: "Dakar",
        year: "2002",
        type: "Automatique",
        image: "/images/cars/car4.jpg",
        stars: 3
    },
    {
        id: 2,

        name: "4x4",
        price: "5000",
        location: "Dakar",
        year: "2000",
        type: "Automatique",
        image: "/images/cars/car5.jpg",
        stars: 5
    },
    {
        id: 3,

        name: "Berline",
        price: "5000",
        location: "Dakar",
        year: "2011",
        type: "Automatique",
        image: "/images/cars/car6.jpg",
        stars: 2
    },
    {
        id: 4,

        name: "Berline",
        price: "5000",
        location: "Dakar",
        year: "2011",
        type: "Automatique",
        image: "/images/cars/car8.jpg",
        stars: 2
    }
];


const ProductList = () => {

    return <Container fluid  style={{margin: "8em 0 5em 0", width: "100%", padding:"0 1.5em"}}>
               <SearchBar />
               <Container fluid className="text-muted pt-4" style={{height: "40px"}}>
                  <span>Résultats 1 - 20</span>
               </Container>
                <Row>
                    <Col sm="4">
                      <FilterPanel />
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
            </Container>
}



export default ProductList;