
import { Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import MainButton from "../../components/buttons/mainButton";
import { colorBottongreen, colorBottonReserver, mainBlue, textBlue } from "../../constants/colors";
import FormDetails from "./formDetails";
import InfoVoiture from "./infoVoiture";
import { Star } from "@material-ui/icons";
import LocationDetailGallery from "../../components/gallery/LocationDetailsGallery";
import Evaluation from "./evaluation";


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


const LocationDetails = (props) => {
    const location = useLocation();

    const id = location.state.id;

    const formatStars = (stars) => {
        const starList = [];
        const off = 5 - stars;

        [...Array(stars).keys()].forEach((item) => {

            starList.push(<Star style={{ color: mainBlue, fontSize: "small"}} />)

        });

        [...Array(off).keys()].forEach((item) => {

            starList.push(<Star className="text-muted" />)

        })



        return starList;
    }



    const post = list.find((item) => item.id === id);


    return (<div>
        <Container >
            <LocationDetailGallery gallery={post.gallery} />
        </Container>
        <Row style={{ margin: "5px 10px", padding: "15px" }}>
            <Col sm="8">
                <div style={{ width: "95%" }}>
                    <div className="card" style={{ margin: "5px", padding: "5px" }} >
                        <h6 class="small" style={{ color: textBlue }}><strong>PROPRIÉTAIRE</strong> </h6>
                        <Row>
                            <Col sm="2" height="30px" width="30px" style={{paddingRight: "0"}} >
                                <span >
                                    <img width="90%" height="auto" class="rounded-circle" src={post.user.imageProfil} ></img>
                                </span>
                            </Col>
                            <Col sm="10"   style={{paddingLeft: "0"}}g>
                                <div class="container"  style={{paddingLeft: "0"}}>
                                    <p style={{margin : "0"}} class="small text-secondary"><strong>{post.user.prenom} {post.user.nom}</strong></p>
                                    <p style={{margin : "0"}} class="small text-secondary">{post.user.statusTel}</p>
                                    <p style={{margin : "0"}} class="small text-secondary">Membre depuis {post.user.dateInscription}</p>
                                    <p style={{margin : "0"}}>{formatStars(post.stars).map((star) => star)}</p>
                                </div>
                            </Col>
                        </Row>

                    </div>

                    <div class="container" style={{ padding: "0px 50px 0px 0px" }}>
                        <p class="small " style={{ color: textBlue }}><strong> {post.name}, {post.Carburant}, à {post.location}</strong> <br></br> </p>
                        <p class="small text-secondary ">{post.user.descriptionPoste} </p>
                    </div>

                    <div>
                    <MainButton s={18}  c={textBlue} color={colorBottongreen} title="Enoyer un message" h={40} />              
                    </div>
                    <br></br>

                    < InfoVoiture />
                    <br></br>

                    <h6 class="small" style={{ color: textBlue }}><strong>EMPLACMENT DE LA VOITURE</strong> <br></br></h6>
                    <p class="small  text-secondary">Vous recevrez l adresse précise et des indications sur le lieu de prise en charge de la voiture
                    aprés confirmation de la réservation."</p>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item"
                            src={post.emplacement}
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className="card" style={{ marginTop: "15px", paddingTop: "10px", paddingLeft: "10px", width: "100%" }}>
                        <h6 class="small"  style={{ color: textBlue }}><strong>CONDITIONS REQUISES PAR LE PROPRIÉTAIRE</strong> </h6>
                        <p class="small text-secondary"> {post.conditionsRequises}</p>
                        <p class="small text-primary" style={{ cursor: "pointer" }}>En savoir plus</p>
                    </div>
                    <br></br>
                    <Evaluation />  
                </div>
               
            </Col>
            <Col sm="4">
                <FormDetails />
            </Col>
        </Row>
    </div>
    )
}

export default LocationDetails;