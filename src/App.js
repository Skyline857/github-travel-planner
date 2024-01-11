import './App.css';
import image from './Travelling.jpg';
import imageTwo from './Pic 2.jpg';
import { TravelList} from './TravelList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
     <img src={ image } width="250px" alt="travelling"/>
     </div>
     <div className='container'>
     <h1>Trip planner</h1>
     </div>
     <TravelList/>
     <div className='container'>
     <img src={imageTwo} width="250px" alt="travellers"/>
    </div>
  </div>
  );
}

export default App;
