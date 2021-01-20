
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import MainButton from "../../components/buttons/mainButton";
import { colorBottongreen, colorBottonReserver } from "../../constants/colors";
import FormDetails from "./formDetails";
import { Icon } from "@material-ui/core";
import InfoVoiture from "./infoVoiture";


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
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location (Jusqu'à 5000f caf de pénalite pour la saleté)  -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) "

    },
    {
        id: 1,
        name: "4x4 Renauld",
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
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location (Jusqu'à 5000f caf de pénalite pour la saleté) -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) "
    },
    {
        id: 2,
        name: "Berline Mercedes",
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
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location (Jusqu'à 5000f caf de pénalite pour la saleté)  -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) "
    },
    {
        id: 3,
        name: "Renault Clio Limited",
        price: "5000",
        location: "Dakar",
        year: "2002",
        vitesse: "Automatique",
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
        conditionsRequises: " - Respecter l'état intérieur du véhicule: il est à rendre aussi propre qu'au début de  la location  (Jusqu'à 5000f caf de pénalite pour la saleté) -Nos véhicule sont nom-fumeur (35000 F CFA de pénalité pour non respect) "
    }
];

const Proprietaire = [
    {
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
    },
    {
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
    },
]

const Details = (props) => {
    const location = useLocation();

    const id = location.state.id;

    const proprietaireId = location.state.proprietaireId;

    const proprietaire = Proprietaire.find((item) => item.id === proprietaireId);

    const post = list.find((item) => item.id === id);


    return (<div style={{ width: "100%" }}>
        <Row >
            <figure className="figure" style={{ height: "450px", width: "100%", overflow: "hidden" }}>
                <img src={post.image} width="100%" class="img-fluid " max-height="auto" alt="Responsive image" />
            </figure>
        </Row>
        <Row style={{ margin: "5px 10px", width: "90%", padding: "15px" }}>
            <Col sm="8">
                <div className="card" style={{ margin: "5px", width: "90%", padding: "5px" }} >
                    <h6 class="small" style={{ color: colorBottonReserver }}><strong>PROPRIETAIRE</strong> </h6>
                    <Row>
                        <Col sm="3" height="20px" width="100%" >
                            <span>
                                <img width="80%" height="auto" class="rounded-circle" src={proprietaire.imageProfil} ></img>
                            </span>
                        </Col>
                        <Col sm="9" >
                            <div class="container">
                                <p class="small text-secondary"><strong>{proprietaire.prenom} {proprietaire.nom}</strong></p>
                                <p class="small text-secondary">{proprietaire.statusTel}</p>
                                <p class="small text-secondary">{proprietaire.dateInscription}</p>
                            </div>
                        </Col>
                    </Row>

                </div>

                <div class="container" style={{ width: "100%", padding: "0px 50px 0px 0px" }}>
                    <p class="small " style={{ color: colorBottonReserver }}><strong> {post.name}, {post.Carburant}, à {post.location}</strong> <br></br> </p>
                    <p class="small text-secondary ">{proprietaire.descriptionPoste} </p>
                    <div style={{ width: "15em", class: "rounded" }}>
                        <MainButton color={colorBottongreen} cl={"small"} c={colorBottonReserver} title="Enoyer un message" h={35} />
                    </div>
                </div>
            
                < InfoVoiture />
                
                <p class="small" style={{ color: colorBottonReserver }}><strong>EMPLACMENT DE LA VOITURE</strong> <br></br></p>
                <p class="small  text-secondary">Vous recevrez l adresse précise et des indications sur le lieu de prise en charge de la voiture
                aprés confirmation de la réservation."
                </p>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item"
                        src={post.emplacement}
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="card" style={{ marginTop: "15px", paddingTop: "10px", paddingLeft: "10px", width: "100%" }}>
                    <h6 class="small" style={{ color: colorBottonReserver }}><strong>CONDITIONS REQUISES PAR LE PROPRIETAIRE</strong> </h6>
                    <p class="small text-secondary"> {post.conditionsRequises}</p>
                    <p class="small text-primary" style={{ cursor: "pointer" }}>En savoir plus</p>
                </div>
            </Col>
            <Col sm="4">
                <FormDetails />
            </Col>
        </Row>
    </div>
    )
}

export default Details;