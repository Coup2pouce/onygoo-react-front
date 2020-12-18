import { makeStyles } from '@material-ui/core';
import { Col, Container, Image, InputGroup, Row} from 'react-bootstrap';
import { backBlue } from '../../constants/colors';
import { Form } from 'react-bootstrap';
import { SearchOutlined } from '@material-ui/icons';
import IconButton from '../../components/buttons/iconButton';
import { isMobile } from 'react-device-detect';

const useStyle = makeStyles((theme) => ({
   root:{
       position: "relative",
       backgroundColor: backBlue,
       width: "100%",
       height: "auto",
       padding: "4em 5em",
       color: "#ffffff",
       marginTop: isMobile ? "" :"-0.5em"
   },
   title:{
       fontSize: "26px",
       fontWeight: "bolder",
       marginBottom: "2em"
   }
}));


const Discover = () =>  {

  const onSearch  = () => {
      console.log('ok from search')
  }

   const classes = useStyle()
  return (
    <Container fluid className="p-0" className={classes.root}>
         <Row>
             <Col sm="8">
               <h2  className={classes.title}>Découvrez des voitures à louer <br/> partout au Sénégal</h2>
               <p style={{marginBottom: "2em"}}>
                   Grace aux propriétaires mettant en location leurs voitures sur <br/>
                   OnyGoo, nous vous proposons un service d'autopartage <br/>
                   dans de nombreuses villes, que ce soit pour un besoin d'une <br/>
                    heure ou plusieurs jours.
               </p>
               <Form>
                   <Row className="mb-2">
                       <Col xs="8">
                            <InputGroup >
                                <InputGroup.Prepend >
                                <InputGroup.Text id="address" style={{border: "none", borderRadius: "0"}}>
                                    <SearchOutlined />
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Adresse précise..." style={{height: "55px", borderRadius: "0px"}}
                                aria-describedby="address"
                                />
                            </InputGroup>
                       </Col>
                       <Col xs="4" className="mx-0 px-0">
                          <IconButton icon={"/images/ok.png"}  h={55} w={120} action={onSearch} />
                       </Col>

                   </Row>
                  
               </Form>
             </Col>
             <Col sm="4">
                 <div style={{width: "280px"}}>
                    <Row>
                        <Col sx="5">
                        <Image  src="/images/pont.png" className="mb-1" style={{height: "90px", width: "100%"}}  />
                        <Image  src="/images/aeport.png" className="mb-1"  style={{height: "90px", width: "100%"}}  />
                        <Image  src="/images/sea.png" style={{height: "50px", width: "100%"}} />
                        </Col>
                        <Col xs="7" className="pl-0">
                        <Image fluid src="/images/mdr.png" style={{height: "240px"}}  />
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col><Image fluid src="/images/beach.png" style={{width: "100%", height: "60px"}}  /></Col>
                    </Row>
                 </div>
                 
             </Col>

         </Row>
    </Container>
  );
}

export default Discover;
