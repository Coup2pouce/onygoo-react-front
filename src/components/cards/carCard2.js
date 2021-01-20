import { useHistory } from "react-router-dom";
import { DETAILS } from "../../constants/routes";
import { Avatar } from 'primereact/avatar';
import { Star } from "@material-ui/icons";
import { mainBlue } from "../../constants/colors";
import { Image } from "react-bootstrap";



const CarCard2 = (props) => {

    const history = useHistory();

    const {post, idProp} = props;


    const formatStars = (stars) => {
        const starList = [];
        const off = 5 - stars;

          [...Array(stars).keys()].forEach((item) =>{
          
              starList.push(<Star style={{color: mainBlue}} />)
          
          });

          [...Array(off).keys()].forEach((item) =>{
          
            starList.push(<Star className="text-muted" />)
        
        })
          
      

        return starList;
      }

    return (<div className="card" style={{width: "100%", cursor: "pointer"}} onClick={()=> {
         history.push({
             pathname: DETAILS,
             state: {
                 id: post.id,
                 proprietaireId: idProp
             }
         })    }}>
                <img width="100%" height="280px" class="card-img-top" src={post.image} alt={post.name} />
                <span style={{margin: "-2.5em 0 1.5em 2em", fontSize:"26px", fontWeight: "bolder", color:"white"}}>{post.price} fcfa</span>
                <div class="card-body pb-0">                 <div className="row">
                    <div className="col-10" style={{fontSize: "12px"}}>
                      <p>à <strong>140m</strong> : Renault Clio, Desel, Grd Yoff</p>
                      <p>{formatStars(post.stars).map((star) => star)} 13. 20201. 5 places</p>
                    </div>
                    <div className="col-2">
                    <Image width="48px" height="48px" src="https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg" className="rounded-circle" />
                    </div>
                 </div>
                </div>
            </div>)
}



export default CarCard2;