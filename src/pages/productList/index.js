
import {Row, Col} from "react-bootstrap";
import CarCard2 from "../../components/cards/CarCard2";


const list = [
    {
        id: 0,
        name: "Renault Clio Limited",
        price: "5000",
        location: "Dakar",
        year: "2002",
        type: "Automatique",
        image: "/images/cars/car1.jpg",
        stars: 3,
        emplacement: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.932746561482!2d-17.455852386077222!3d14.716394289728765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172c7b80f1065%3A0xa5310f371915bdf5!2sS.I.C.A.P.%20Liberte%203%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1610804385921!5m2!1sfr!2ssn",
        proprietaireId: 1,
        kilometrage: "100-150 0000",
        plaqueImatriculation: "1418-DK",
        paysImatriculation: "Senegal",
        AnneeImatriculation: "2015",
        Carburant: "diesel",
        nbPorte: 4,
        nbSiege: 5,
        entretientVehicucle: "Mon véhicule est bien entretenu",
        controleTechnique: "Mon vehicule dispose d'un contrôle technique à jour",
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location <br> (Jusqu'à 5000f caf de pénalite pour la saleté) <br><br> -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) "
    },
    {
        id: 1,
        name: "4x4",
        price: "5000",
        location: "Dakar",
        year: "2000",
        type: "Automatique",
        image: "/images/cars/car2.jpg",
        stars: 5,
        emplacement: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.932746561482!2d-17.455852386077222!3d14.716394289728765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172c7b80f1065%3A0xa5310f371915bdf5!2sS.I.C.A.P.%20Liberte%203%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1610804385921!5m2!1sfr!2ssn",
        proprietaireId: 2,
        kilometrage: "100-150 0000",
        plaqueImatriculation: "1418-DK",
        paysImatriculation: "Senegal",
        AnneeImatriculation: "2015",
        Carburant: "diesel",
        nbPorte: 4,
        nbSiege: 5,
        entretientVehicucle: "Mon véhicule est bien entretenu",
        controleTechnique: "Mon vehicule dispose d'un contrôle technique à jour",
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location <br> (Jusqu'à 5000f caf de pénalite pour la saleté) <br><br> -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) "
    },
    {
        id: 2,
        name: "Berline",
        price: "5000",
        location: "Dakar",
        year: "2011",
        type: "Automatique",
        image: "/images/cars/car3.jpg",
        stars: 2,
        emplacement: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.932746561482!2d-17.455852386077222!3d14.716394289728765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172c7b80f1065%3A0xa5310f371915bdf5!2sS.I.C.A.P.%20Liberte%203%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1610804385921!5m2!1sfr!2ssn",
        proprietaireId: 1,
        kilometrage: "100-150 0000",
        plaqueImatriculation: "1418-DK",
        paysImatriculation: "Senegal",
        AnneeImatriculation: "2015",
        Carburant: "diesel",
        nbPorte: 4,
        nbSiege: 5,
        entretientVehicucle: "Mon véhicule est bien entretenu",
        controleTechnique: "Mon vehicule dispose d'un contrôle technique à jour",
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location <br> (Jusqu'à 5000f caf de pénalite pour la saleté) <br><br> -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) "
    },
    {
        id: 3,
        name: "Renault Clio Limited",
        price: "5000",
        location: "Dakar",
        year: "2002",
        type: "Automatique",
        image: "/images/cars/car1.jpg",
        stars: 3,
        emplacement: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.932746561482!2d-17.455852386077222!3d14.716394289728765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172c7b80f1065%3A0xa5310f371915bdf5!2sS.I.C.A.P.%20Liberte%203%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1610804385921!5m2!1sfr!2ssn",
        proprietaireId: 1,
        kilometrage: "100-150 0000",
        plaqueImatriculation: "1418-DK",
        paysImatriculation: "Senegal",
        AnneeImatriculation: "2015",
        Carburant: "diesel",
        nbPorte: 4,
        nbSiege: 5,
        entretientVehicucle: "Mon véhicule est bien entretenu",
        controleTechnique: "Mon vehicule dispose d'un contrôle technique à jour",
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location <br> (Jusqu'à 5000f caf de pénalite pour la saleté) <br><br> -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) "
    }
];
const ProductList = () => {
    return (<div style={{margin: "8em 5em 0", width:"80%", padding:"0 1.5em"}}>
        <Row>
            <Col sm="4">
            </Col>
            <Col sm="8">
                <Row>
                    {
                        list.map((item) =>  <Col sm="6" className="mt-4" > 
                        <CarCard2 post={item}  />
                       </Col>)
                    }
                </Row>
            </Col>
        </Row>
    </div>);
}

export default ProductList;