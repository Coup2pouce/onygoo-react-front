import { useHistory } from "react-router-dom";
import { DETAILS } from "../../constants/routes";



const CarCard2 = (props) => {

    const history = useHistory();

    const { post } = props;

    return (<div className="card" style={{ width: " 100%", height: "100%", cursor: "pointer" }} onClick={() => {
        history.push({
            pathname: DETAILS,
            state: {
                id: post.id,
                proprietaireId: post.proprietaireId
            }

        })
    }}>
        <img class="card-img-top" src={post.image} alt="Card image cap" />
        <span>{post.price} CFA</span>
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>)
}
export default CarCard2;