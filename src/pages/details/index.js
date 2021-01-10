import { useLocation } from "react-router-dom";

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


const Details = (props) => {

    const location = useLocation();

    const id = location.state.id;

   const post = list.find((item) => item.id === id);
    
    return (<div>
    <img src={post.image} />

    </div>)
}


export default Details;