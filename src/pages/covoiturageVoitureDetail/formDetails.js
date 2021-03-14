import { backBlueCiel, colorCov, textBlue } from "../../constants/colors";
import { Image, } from "react-bootstrap";
import MainButton from "../../components/buttons/mainButton";

const FormDetails = (props) => {
    return (
        <div className="card  " style={{ padding: "15px", backgroundColor: backBlueCiel }}>
            <p style={{ color: textBlue, marginBottom: "0" }}><strong> 3 Places disponibles</strong></p>
            <hr></hr>
            <div class="row">
                <div class="col col-md-3">
                    <Image className="rounded-circle" width="35px" height="35px" src="https://uifaces.co/our-content/donated/6MWH9Xi_.jpg" />
                </div>
                <div class="clo col-md-9 small">
                    <p>Fatou D</p>
                </div>
            </div>
            <hr></hr>
            <div class="row">
                <div class="col col-md-3 ">
                    <li class="list-inline-item  rounded-circle  text-center " style={{ width: '35px', height: '35px', backgroundColor: "#B2B0B0" }}><a class="social-icon text-xs-center" target="_blank" href="#"><Image src="/images/icons/walker.png" /></a></li>
                </div>
                <div class="clo col-md-9 small">
                    <p>Place disponible</p>
                </div>
            </div>
            <hr></hr>
            <div class="row">
                <div class="col col-md-3 ">
                    <li class="list-inline-item  rounded-circle  text-center " style={{ width: '35px', height: '35px', backgroundColor: "#B2B0B0" }}><a class="social-icon text-xs-center" target="_blank" href="#"><Image src="/images/icons/walker.png" /></a></li>
                </div>
                <div class="clo col-md-9 small">
                    <p>Place disponible</p>
                </div>
            </div>
            <hr></hr>
            <div class="row">
                <div class="col col-md-3 ">
                    <li class="list-inline-item  rounded-circle  text-center " style={{ width: '35px', height: '35px', backgroundColor: "#B2B0B0" }}><a class="social-icon text-xs-center" target="_blank" href="#"><Image src="/images/icons/walker.png" /></a></li>
                </div>
                <div class="clo col-md-9 small">
                    <p>Place disponible</p>
                </div>
            </div>
            <hr></hr>

            <div class="row">
                <div class="col col-md-7">
                    <p style={{ color: textBlue }}><strong> Prix par place</strong></p>
                </div>
                <div class="col col-md-5 small" style={{ textAlign: "right" }}>
                    <p style={{ color: colorCov, textAlign: "right" }}><strong> 1500 F cfa</strong></p>
                </div>
            </div>
            <MainButton title=" Reserver" s={12} color={colorCov} h={40} />
            <div class="row" style={{ paddingTop: "10px", marging: "0" }}>
                <div class="col col-md-2 small" style={{ paddingTop: "10px" }}>
                    <Image src="/images/icons/Icon material-lock-outline.png" height="18px" />
                </div>
                <div class="col col-md-10" style={{ paddingTop: "10px", textAlign: "right", fontSize: "small" }}>
                    <p >Paiement sécurisé avec OnyGoo</p>
                </div>
            </div>
            <hr></hr>
            <div class="small " style={{ marging: "0", fontSize: "x-small" }}>
                <p><strong>Facile</strong> <br></br>
                    Recevez des notifications par sms, email, <br></br> Ou appli.</p>
                <p><strong>En toute sécurité</strong><br></br>
                Consulter les évaluations  et les  <br></br>Recommandations avant de reserver</p>
                <p><strong>Pas de frais</strong><br></br>
                Réserver votre trajet en ligne <br></br>Sans payer de frais de service.</p>
            </div>
        </div>
    );

}

export default FormDetails;