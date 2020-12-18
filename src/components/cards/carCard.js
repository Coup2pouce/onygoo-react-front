import { Star } from "@material-ui/icons";
import { Card } from "react-bootstrap";
import { mainBlue } from '../../constants/colors';


const CarCard = (props) => {

      const {post} = props;
     

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
  
    return (<Card style={{ width: '100%', borderRadius: "0px", cursor: "pointer",  }}>
        <Card.Img variant="top" src={post.image} height="180px"   />
        <Card.Body>
          <Card.Title style={{fontSize: "16px", fontWeight:"800"}}>{post.name}</Card.Title>
          <Card.Text style={{fontSize: "12px"}}>
              <span>{post.location}</span>
              <span className="mx-2">.</span>
              <span>{post.year}</span>
              <span className="mx-2">.</span>
              <span>{post.type}</span>
              <span className="ml-5" style={{color: mainBlue, fontSize: "18px", fontWeight: "bolder"}}>{post.price} Fcfa</span> 
          </Card.Text>
          <Card.Text>
            {
              
              formatStars(post.stars).map((star) => star)
            }
          </Card.Text>
        </Card.Body>
  </Card>)

}

export default CarCard;