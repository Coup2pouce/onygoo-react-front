import Header from '../../components/header/index';
import CarList from '../../components/lists/carList';
import MainInfo from './mainInfo';
import Discover from './descover';
import Download from './dowload';
import Footer from '../../components/footer/index';




const Home = () =>  {
  return (
    <div className="mt-5">
       <Header />
       <CarList />
       <MainInfo />
       <Discover />
       <Download />
       <Footer />
    </div>
  );
}

export default Home;
