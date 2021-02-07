import Header from '../../components/header/index';
import CarList from '../../components/lists/carList';
import MainInfo from './mainInfo';
import Discover from './descover';
import Download from './dowload';
import TopTrajet from '../../components/header/topTrajet';
import { useState } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import FollowUp from '../../components/picker/datePicker';




const ConnectedHome = (props) =>  {
  const [mode, setMode] = useState(props.mode);

  store.subscribe(() => {
    // When state will be updated(in our case, when items will be fetched), 
    // we will update local component state and force component to rerender 
    // with new data.

    setMode(store.getState().mode)

  });
  return (
    <div className="mt-5">
       <Header />
        { mode == 0 ?<TopTrajet /> : <CarList />}
       <MainInfo />
       <Discover />
       <Download />
    </div>
  );
}

const mapStateToProps = state => {
  return { mode: state.mode };
};
const Home = connect(mapStateToProps)(ConnectedHome);


export default Home;
