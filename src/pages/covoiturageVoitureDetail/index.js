import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import FormDetails from "./formDetails";
import InfosPost from "./infosPost";
import { Image, } from "react-bootstrap";

const list = [
    {
        id: 0,
        name: "Renault Clio Limited",
        price: "5000",
        location: "Dakar",
        year: "2002",
        type: "Automatique",
        image: "/images/cars/car1.jpg",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvMr-yDE-63ndmi1InUfonQNcGcrsHg6LAw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwTulFoaiSOvd0zbXSKuNxNI-8VNqw2MnaA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiALcsCF3jXcHHsfqSF5exjMQUGFGe4jx7ng&usqp=CAU"
        ],
        stars: 3,
        emplacement: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.932746561482!2d-17.455852386077222!3d14.716394289728765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172c7b80f1065%3A0xa5310f371915bdf5!2sS.I.C.A.P.%20Liberte%203%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1610804385921!5m2!1sfr!2ssn",
        userId: 1,
        kilometrage: "100-150 0000",
        plaqueImatriculation: "1418-DK",
        paysImatriculation: "Senegal",
        AnneeImatriculation: "2015",
        Carburant: "diesel",
        nbPorte: 4,
        nbSiege: 5,
        entretientVehicucle: "Mon véhicule est bien entretenu",
        controleTechnique: "Mon vehicule dispose d'un contrôle technique à jour",
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location (Jusqu'à 5000f caf de pénalite pour la saleté)  -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) ",
        user: {
            id: 1,
            nom: "yade",
            prenom: "Mansour ",
            imageProfil: "/images/mass.jpg",
            adresse: "sicap liberte 3 villa 2055",
            complementAdresse: " nom loin de l'\Saldia ",
            codePostale: "11000",
            ville: "Dakar",
            pays: "",
            telephone: "777377636",
            dateInscription: "novembre 2018",
            statusTel: "N° de portable vérifié",
            stars: " ***** 31 notes",
            descriptionPoste: "je vous propose à la location de cette magnifique Classe A 200d Line, toute option. Elle est neuve, pour toute demande de location, je vous la livre avec le plein Gasoil ainsi que laver et nettoyer. donc la rendre dans le meme état, elle est non FUMEUR, donc veiullez respecter si vous voulez pas avoir une pénalité en cas de non respcet."
        }
    },
    {
        id: 1,
        name: "4x4 Renauld",
        price: "5000",
        location: "Dakar",
        year: "2000",
        type: "Automatique",
        image: "/images/cars/car2.jpg",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvMr-yDE-63ndmi1InUfonQNcGcrsHg6LAw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwTulFoaiSOvd0zbXSKuNxNI-8VNqw2MnaA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiALcsCF3jXcHHsfqSF5exjMQUGFGe4jx7ng&usqp=CAU"
        ],
        stars: 5,
        emplacement: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.932746561482!2d-17.455852386077222!3d14.716394289728765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172c7b80f1065%3A0xa5310f371915bdf5!2sS.I.C.A.P.%20Liberte%203%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1610804385921!5m2!1sfr!2ssn",
        userId: 2,
        kilometrage: "100-150 0000",
        plaqueImatriculation: "1418-DK",
        paysImatriculation: "Senegal",
        AnneeImatriculation: "2015",
        Carburant: "diesel",
        nbPorte: 4,
        nbSiege: 5,
        entretientVehicucle: "Mon véhicule est bien entretenu",
        controleTechnique: "Mon vehicule dispose d'un contrôle technique à jour",
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location (Jusqu'à 5000f caf de pénalite pour la saleté) -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) ",
        user: {
            id: 1,
            nom: "yade",
            prenom: "Mansour ",
            imageProfil: "/images/mass.jpg",
            adresse: "sicap liberte 3 villa 2055",
            complementAdresse: " nom loin de l'\Saldia ",
            codePostale: "11000",
            ville: "Dakar",
            pays: "",
            telephone: "777377636",
            dateInscription: "novembre 2018",
            statusTel: "N° de portable vérifié",
            stars: " ***** 31 notes",
            descriptionPoste: "je vous propose à la location de cette magnifique Classe A 200d Line, toute option. Elle est neuve, pour toute demande de location, je vous la livre avec le plein Gasoil ainsi que laver et nettoyer. donc la rendre dans le meme état, elle est non FUMEUR, donc veiullez respecter si vous voulez pas avoir une pénalité en cas de non respcet."
        }
    },
    {
        id: 2,
        name: "Berline Mercedes",
        price: "5000",
        location: "Dakar",
        year: "2011",
        type: "Automatique",
        image: "/images/cars/car3.jpg",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvMr-yDE-63ndmi1InUfonQNcGcrsHg6LAw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwTulFoaiSOvd0zbXSKuNxNI-8VNqw2MnaA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiALcsCF3jXcHHsfqSF5exjMQUGFGe4jx7ng&usqp=CAU"
        ],
        stars: 2,
        emplacement: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.932746561482!2d-17.455852386077222!3d14.716394289728765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172c7b80f1065%3A0xa5310f371915bdf5!2sS.I.C.A.P.%20Liberte%203%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1610804385921!5m2!1sfr!2ssn",
        userId: 1,
        kilometrage: "100-150 0000",
        plaqueImatriculation: "1418-DK",
        paysImatriculation: "Senegal",
        AnneeImatriculation: "2015",
        Carburant: "diesel",
        nbPorte: 4,
        nbSiege: 5,
        entretientVehicucle: "Mon véhicule est bien entretenu",
        controleTechnique: "Mon vehicule dispose d'un contrôle technique à jour",
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location (Jusqu'à 5000f caf de pénalite pour la saleté)  -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) ",
        user: {
            id: 2,
            nom: "Senghor",
            prenom: "Babacar ",
            imageProfil: "/images/pp.jpg",
            adresse: "sicap liberte 3 villa 2055",
            complementAdresse: " nom loin de l'\Saldia ",
            codePostale: "11000",
            ville: "Dakar",
            pays: "",
            telephone: "777377636",
            dateInscription: "novembre 2018",
            statusTel: "N° de portable vérifié",
            stars: " ***** 31 notes",
            descriptionPoste: "je vous propose à la location de cette magnifique Classe A 200d Line, toute option. Elle est neuve, pour toute demande de location, je vous la livre avec le plein Gasoil ainsi que laver et nettoyer. donc la rendre dans le meme état, elle est non FUMEUR, donc veiullez respecter si vous voulez pas avoir une pénalité en cas de non respcet."
        }
    },
    {
        id: 3,
        name: "Renault Clio Limited",
        price: "5000",
        location: "Dakar",
        year: "2002",
        vitesse: "Automatique",
        image: "/images/cars/car1.jpg",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvMr-yDE-63ndmi1InUfonQNcGcrsHg6LAw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwTulFoaiSOvd0zbXSKuNxNI-8VNqw2MnaA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiALcsCF3jXcHHsfqSF5exjMQUGFGe4jx7ng&usqp=CAU"
        ],
        stars: 3,
        emplacement: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.932746561482!2d-17.455852386077222!3d14.716394289728765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172c7b80f1065%3A0xa5310f371915bdf5!2sS.I.C.A.P.%20Liberte%203%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1610804385921!5m2!1sfr!2ssn",
        userId: 1,
        kilometrage: "100-150 0000",
        plaqueImatriculation: "1418-DK",
        paysImatriculation: "Senegal",
        AnneeImatriculation: "2015",
        Carburant: "diesel",
        nbPorte: 4,
        nbSiege: 5,
        entretientVehicucle: "Mon véhicule est bien entretenu",
        controleTechnique: "Mon vehicule dispose d'un contrôle technique à jour",
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location  (Jusqu'à 5000f caf de pénalite pour la saleté) -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) ",
        user: {
            id: 2,
            nom: "Senghor",
            prenom: "Babacar ",
            imageProfil: "/images/pp.jpg",
            adresse: "sicap liberte 3 villa 2055",
            complementAdresse: " nom loin de l'\Saldia ",
            codePostale: "11000",
            ville: "Dakar",
            pays: "",
            telephone: "777377636",
            dateInscription: "novembre 2018",
            statusTel: "N° de portable vérifié",
            stars: " ***** 31 notes",
            descriptionPoste: "je vous propose à la location de cette magnifique Classe A 200d Line, toute option. Elle est neuve, pour toute demande de location, je vous la livre avec le plein Gasoil ainsi que laver et nettoyer. donc la rendre dans le meme état, elle est non FUMEUR, donc veiullez respecter si vous voulez pas avoir une pénalité en cas de non respcet."
        }
    }
];



const CovoiturageDetails = () => {
    const covoiturage = useLocation();

    const id = covoiturage.state.id;

    const post = list.find(
        (item) => item.id === id
    );

    return (<div fluid style={{ width: "100%", margin: "70px 0 0 60px" }}>
        <div style={{ margin: "25px", width: "90%" }}>
            <div class="small" style={{fontSize: "small"}}>
                <p>Dakar, garage pompier   <Image src="/images/icons/Icon ionic-ios-arrow-round-forward.png" height="10px" /> Thiès, centre-ville<br></br>
            <strong>20</strong>  trajets disponibles</p>
            </div>
            <Row >
                <Col sm="9" >
                    < InfosPost />
                </Col>
                <Col sm="3">
                    < FormDetails />
                </Col>
            </Row>
        </div>
    </div>);
}


export default CovoiturageDetails;
