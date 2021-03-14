import { textBlue, mainBlue } from "../../constants/colors";
import { Image } from "react-bootstrap";
import { Star } from "@material-ui/icons";

const Evaluation = (props) => {

    const formatStars = (stars) => {
        const starList = [];
        const off = 4 - stars;

        [...Array(stars).keys()].forEach((item) => {

            starList.push(<Star style={{ color: mainBlue, fontSize: "small" }} />)

        });

        [...Array(off).keys()].forEach((item) => {

            starList.push(<Star className="text-muted" />)

        })



        return starList;
    }

    return (<div className="card" style={{ marginTop: "5px", padding: "20px" }}>
        <h6 class="small" style={{ color: textBlue }}><strong>ÉVALUATIONS</strong></h6>

        <div class="row"  >
            <div class="col col-md-1" >
                <Image className="rounded-circle" width="50px" height="50px" src="https://uifaces.co/our-content/donated/6MWH9Xi_.jpg" />
            </div>
            <div class="col col-md-9" style={{ fontSize: "small", fontWeight: "unset", paddingLeft: "15px"}}>
                <p style={{ color: textBlue, fontSize: "small",margin : "0" }}><strong>Alioune D. Touré</strong></p>
                <p style={{margin : "0"}}>Super</p> 
                <div style={{ textAlign: "reight"}}>
                    {formatStars(4)}
                </div>
            </div>
            <div class="col col-md-2">
                <p class="small">07/10/2020</p>
            </div>
        </div>
        <hr></hr>
        <div class="row" >
            <div class="col col-md-1" >
                <Image className="rounded-circle" width="50px" height="50px" src="https://uifaces.co/our-content/donated/6MWH9Xi_.jpg" />
            </div>
            <div class="col col-md-9" style={{ fontSize: "small", fontWeight: "unset", paddingLeft: "15px"}}>
                <p style={{ color: textBlue, fontSize: "small",margin : "0" }}><strong>Abdoulaye Wade</strong></p>
                <p style={{margin : "0"}}>Pas de souci</p> 
                <div style={{ textAlign: "reight"}}>
                    {formatStars(4)}
                </div>
            </div>
            <div class="col col-md-2">
                <p class="small">07/10/2020</p>
            </div>
        </div>
        <hr></hr>
        <div class="row" >
            <div class="col col-md-1" >
                <Image className="rounded-circle" width="50px" height="50px" src="https://uifaces.co/our-content/donated/6MWH9Xi_.jpg" />
            </div>
            <div class="col col-md-9" style={{ fontSize: "small", fontWeight: "unset", paddingLeft: "15px"}}>
                <p style={{ color: textBlue, fontSize: "small",margin : "0" }}><strong>Gora M.</strong></p>
                <p style={{margin : "0"}}>Top location super bien passé une personne agréable je recommande vivement</p> 
                <div style={{ textAlign: "reight"}}>
                    {formatStars(4)}
                </div>
            </div>
            <div class="col col-md-2">
                <p class="small">07/10/2020</p>
            </div>
        </div>
        <hr></hr>
        <div class="row"  >
            <div class="col col-md-1" >
                <Image className="rounded-circle" width="50px" height="50px" src="https://uifaces.co/our-content/donated/6MWH9Xi_.jpg" />
            </div>
            <div class="col col-md-9" style={{ fontSize: "small", fontWeight: "unset", paddingLeft: "15px"}}>
                <p style={{ color: textBlue, fontSize: "small",margin : "0" }}><strong>Babacar Senghor</strong></p>
                <p style={{margin : "0"}}>Bonne voiture</p> 
                <div style={{ textAlign: "reight"}}>
                    {formatStars(4)}
                </div>
            </div>
            <div class="col col-md-2">
                <p class="small" >07/10/2020</p>
            </div>
        </div>
        <br></br>
        <p class="small text-primary" style={{ cursor: "pointer" }}>En savoir plus</p>
     </div> 
    );
}

export default Evaluation;