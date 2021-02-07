
import MainButton from "../../components/buttons/mainButton";
import {  colorBottonReserver, cielBlue } from "../../constants/colors";

const FormDetails = (props) => {

    return (
        <div className="card fluid" style={{ margin: "5px", backgroundColor: cielBlue, height: "495px" }}>
            <form style={{padding: "10px"}} >
                <label class="text-primary"><strong> Depart</strong></label>
                <div class="form-row">
                    <div class="col">
                        <input type="date" class="form-control"></input>
                    </div>
                    <div class="col"  >
                        <input type="time" class="form-control"></input>
                    </div>
                </div>
                <label class="text-primary"><strong>Retour</strong></label>
                <div class="form-row">

                    <div class="col">
                        <input type="date" class="form-control"></input>
                    </div>
                    <div class="col" >
                        <input type="time" class="form-control" ></input>
                    </div>
                </div >
              
                <div class="row">
                        <p class="col  small text-secondary">Période: 1 jour</p>
                        <p class="col text-right" style={{ color: colorBottonReserver }}><strong> 2500 fcfa</strong></p>
                </div>
                <hr></hr>
                <div class="row">
                    <p class=" col col-md-8 small  text-secondary" >Kilometres inclut. 150 Km. Vous pouvez en ajouter d'autres lors de la reservation</p>
                    <p class=" col col-md-4 sm4 text-right " style={{ color: colorBottonReserver }}><strong> 0 fcfa</strong></p>
                </div>
                <hr></hr>
                <div class="row">
                    <p class="col small text-secondary" > Assurance et service </p>
                    <p class="col text-right" style={{ color: colorBottonReserver }}><strong> 0 fcfa</strong></p>
                </div>
                <hr></hr>
                <div class="row">
                    <p class="col small text-secondary" style={{ color: colorBottonReserver }}> <strong> Prix total</strong></p>
                    <p class="col text-right" style={{ color: colorBottonReserver }}><strong> 0 fcfa</strong></p>
                </div>
                <MainButton title=" Reserver" w={"95%"} cl={"text-white"} color={colorBottonReserver} h={40} />
            </form>
        </div>
    )
}

export default FormDetails;
