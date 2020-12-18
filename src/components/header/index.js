import { makeStyles } from "@material-ui/core";
import SearchBar from './search';

const useStyle = makeStyles(() => ({
   root:{
       position: "relative",
       height: "calc(100vh - 230px)",
       backgroundImage: "url('/images/background.png')",
       backgroundPosition:"center",
       backgroundSize: "cover",
       paddingTop: "2em"
   }
}))

const Header = () => {
  const  classes = useStyle()
  return (<div className={classes.root}>
      <h1 className="text-center text-white" style={{fontSize: "52px", fontWeight:"bolder"}}>Louez les voitures d'à côté</h1>
      <SearchBar />
  </div>)

}



export default  Header;