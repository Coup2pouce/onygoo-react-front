import { makeStyles } from "@material-ui/core";
import CovoiturageSearchBar from "./covoiturageSearch";
import SearchBar from './locationSearch';
import { connect } from "react-redux";
import LocationSearch from "./locationSearch";
import store from "../../redux/store";
import { useState } from "react";



const useStyle = makeStyles(() => ({
   root:{
       position: "relative",
       height: "calc(100vh - 230px)",
       backgroundImage: "url('/images/background.png')",
       backgroundPosition:"center",
       backgroundSize: "cover",
       paddingTop: "5%"
   }
}))

const ContectedHeader = (props) => {

  const [mode, setMode] = useState(props.mode)

  store.subscribe(() => {
    // When state will be updated(in our case, when items will be fetched), 
    // we will update local component state and force component to rerender 
    // with new data.

    setMode(store.getState().mode)

  });

  const  classes = useStyle()
  return (<div className={classes.root}>
      <h1 className="text-center text-white" style={{fontSize: "52px", fontWeight:"bolder"}}>Louez les voitures d'à côté</h1>
      {
        mode == 1 ? <LocationSearch /> : ''
      }
      {
        mode == 0 ? <CovoiturageSearchBar />: ''
      }
  </div>)

}
const mapStateToProps = state => {
  return { mode: state.mode };
};
const Header = connect(mapStateToProps)(ContectedHeader);

export default  Header;