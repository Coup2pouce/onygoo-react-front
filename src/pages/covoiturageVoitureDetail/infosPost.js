import { backBlueCiel, colorBottongreen, textBlue, } from "../../constants/colors";
import { Image } from "react-bootstrap";
import { Star } from "@material-ui/icons";
import MainButton from "../../components/buttons/mainButton";

const InfosPost = (props) => {

    const formatStars = (stars) => {
        const starList = [];
        const off = 5 - stars;

        [...Array(stars).keys()].forEach((item) => {

            starList.push(<Star style={{ color: "#E4EB1D", fontSize: "small" }} />)

        });

        [...Array(off).keys()].forEach((item) => {

            starList.push(<Star className="text-muted" />)

        })

        return starList;
    }

    return (<div style={{ width: "95%" }} >
        <div className="card " style={{ marginBottom: "20px", padding: "15px 0 0 50px", backgroundColor: backBlueCiel, height: "250px" }} >
            <h5 style={{ color: textBlue, paddingLeft: "38px" }}><strong>Trajet</strong></h5>
            <div >
                <div class="row"><div class="col col-md-1"></div><div class="col col-md-1"></div><div class="col col-md-10">
                    <p style={{ color: textBlue, fontSize: "small" }}><strong>Aujourd'hui à 18: 55</strong></p>
                </div></div>

                <div class="row" style={{ fontSize: "small", fontWeight: "unset" }}>
                    <div class="col col-md-1" style={{}}>
                        <p>20: 55</p><br></br>
                        <p>23: 45</p>
                    </div>
                    <div class="clo col-md-1 small" style={{ textAlign: "center" }}>
                        <Image src="/images/icons/Ellipse 8.png" /><br></br>
                        <Image src="/images/icons/Ligne 13.png" height="40px" /><br></br>
                        <Image src="/images/icons/Ellipse 9.png" />

                    </div>
                    <div class="col col-md-10" style={{ fontWeight: "unset", fontSize: "small" }}>
                        <p><strong style={{ color: textBlue }} >Dakar</strong><br></br>
                        Garage pompier ( Voir sur la carte )
                        </p>
                        <p><strong style={{ color: textBlue }}>Thies</strong><br></br>
                        Centre ville ( Voir sur la carte )
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card " style={{ marginBottom: "20px", padding: "15px 0 0 50px", backgroundColor: backBlueCiel }}>
            <h5 style={{ color: textBlue, paddingLeft: "38px" }}><strong>Commentaire du conducteur</strong></h5>
            <div class="row" style={{ paddingTop: "10px" }} >
                <div class="col col-md-1">
                    <Image className="rounded-circle" width="52px" height="52px" src="https://uifaces.co/our-content/donated/6MWH9Xi_.jpg" />
                </div>
                <div class="clo col-md-11" style={{ fontSize: "small",whiteSpace:"pre-line", fontWeight: "unset", padding: "10px 0 0 30px" }}>
                    <p>RDV devant le portail du garage pompier<br></br>
                     Arrivé centre ville devant l'hotel de ville de thiés<br></br>
                     J'accepte les gros bagages, pas d'animaux</p>
                </div>
            </div>
        </div>
        <div className="card " style={{ marginBottom: "20px", height: "220px" , padding: "15px 0 0 50px", backgroundColor: backBlueCiel }}>
            <h5 style={{ color: textBlue, paddingLeft: "38px" }}><strong>Conducteur</strong></h5>
            <div class="row" style={{ paddingTop: "10px" }} >
                <div class="col col-md-1"  style={{ paddingTop: "15px" }}>
                    <Image className="rounded-circle" width="52px" height="52px" src="https://uifaces.co/our-content/donated/6MWH9Xi_.jpg" />
                </div>
                <div class="clo col-md-7" style={{ fontSize: "small", fontWeight: "unset", padding: "0 0 0 30px" }}>
                    <p style={{ color: textBlue, fontSize: "small" }}><strong>Lamine DIATTA</strong><br></br>
                    Membre depuis février 2020</p>
                </div>
                <div class="clo col-md-4" >
                    <MainButton title="ENVOYER UN MESSAGE" s={12} c={textBlue} color={colorBottongreen} h={30} />
                </div>
            </div>
            <div class="row" >
                <div class="col col-md-2" style={{ textAlign: "reight", paddingTop: "10px" }}>
                    <p>{formatStars(5)}</p>
                </div>
                <div class="col col-md-4">
                    <div class="row small"> <Image src="/images/icons/Icon awesome-facebook-f-2.png " /> &emsp; Vérifier via facbook</div><br></br>
                    <div class="row small"> <Image src="/images/icons/Icon awesome-twitter-2.png"  height="15px"/> &emsp; Vérifier via Twiter </div>
                </div>
                <div class="col col-md-4" >
                    <div class="row small" > <Image src="/images/icons/Icon material-phone-iphone.png"  /> &emsp; Numéro de téléphone vérifier </div><br></br>
                    <div class="row small"> <Image src="/images/icons/Icon material-email.png"  height="15px" /> &emsp; Email vérifier </div>
                </div>
            </div>
        </div>
        <div className="card " style={{ marginBottom: "20px",  padding: "15px 0 0 50px", backgroundColor: backBlueCiel }}>
            <h5 style={{ color: textBlue, paddingLeft: "38px" }}><strong>Détails et préferences</strong></h5>
            <div class="row small">
                <div class="col col-md-1"> <Image src="/images/icons/Icon awesome-road.png"  height="14px"  /></div>
                <div class="col col-md-2">Péage</div>
                <div class="col col-md-3"> <Image src="/images/icons/Icon material-done-3.png"  height="17px"  /></div>
                <div class="col col-md-1"> <Image src="/images/icons/Icon awesome-luggage-cart.png"  height="15px"  /></div>
                <div class="col col-md-3">Bagage / Taille Moyen</div>
                <div class="col col-md-2"> <Image src="/images/icons/Icon material-done-3.png"  height="15px"  /></div>
            </div>
            <br></br>
            <div class="row small">
                <div class="col col-md-1"> <Image src="/images/icons/Icon map-car-repair.png"  height="21px"  /></div>
                <div class="col col-md-2">Assurance</div>
                <div class="col col-md-3"> <Image src="/images/icons/Icon material-done-3.png"  height="15px"  /></div>
                <div class="col col-md-1"> <Image src="/images/icons/Icon awesome-baby.png"  height="20px"  /></div>
                <div class="col col-md-3">Sièges-auto / Bébé</div>
                <div class="col col-md-2"> <Image src="/images/icons/Icon material-done-3.png"  height="15px"  /></div>
            </div>
            <br></br>
            <div class="row small">
                <div class="col col-md-1"> <Image src="/images/icons/car-seat.png"  height="18px"  /></div>
                <div class="col col-md-2">Place confortable</div>
                <div class="col col-md-3"> <Image src="/images/icons/Icon material-done-3.png"  height="15px"  /></div>
                <div class="col col-md-1"> <Image src="/images/icons/Icon awesome-music.png"  height="17px"  /></div>
                <div class="col col-md-3">Musique</div>
                <div class="col col-md-2"> <Image src="/images/icons/Icon material-done-3.png"  height="15px"  /></div>
            </div>
           <br></br>
            <div class="row small">
                <div class="col col-md-1"> 
              
                <Image src="/images/icons/Rectangle 87.png" paddingTop="1px"  height="3px" />
              
               
                <Image src="/images/icons/Tracé 18.png"  height="20px" height="18px"/>
                </div>
                <div class="col col-md-2">Cigarette</div>
                <div class="col col-md-3"> <Image src="/images/icons/Icon material-do-not-disturb-alt-1.png"  height="15px"  /></div>
                <div class="col col-md-1"> <Image src="/images/icons/Icon awesome-cat.png"  height="18px" /></div>
                <div class="col col-md-3">Animaux</div>
                <div class="col col-md-2"> <Image src="/images/icons/Icon material-do-not-disturb-alt-1.png"  height="15px"  /></div>
            </div>
           <br></br>
            <div class="row small">
                <div class="col col-md-1"> <Image src="/images/icons/Groupe 14.png"  height="13px"  /></div>
                <div class="col col-md-2">Détour possible</div>
                <div class="col col-md-3"> <Image src="/images/icons/Icon material-done-3.png"  height="15px"  /></div>
                <div class="col col-md-1"> <Image src="/images/icons/cold.png"  height="21px"  /></div>
                <div class="col col-md-3">Climatisation</div>
                <div class="col col-md-2"> <Image src="/images/icons/Icon material-do-not-disturb-alt-1.png"  height="15px"  /></div>
            </div>
            <br></br>
        </div>
    </div>

    );
}

export default InfosPost;