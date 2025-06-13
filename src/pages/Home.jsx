
import '../App.css'
import HeroSection from "../components/UI/HeroSection";
import Country from './Country';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/country');
  };
  return (
    <>
    <HeroSection/>

    <Country limit={12}/>
    <div className="viewAll">
        <button className='HomeViewAllButton' onClick={handleNavigate}>View All</button>
    </div>


      

    </>

  );
}

export default Home