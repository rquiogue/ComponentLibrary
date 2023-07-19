import './App.css';
import Rating from './components/Rating.jsx';
import SimpleCard from './components/Cards/simpleCard/SimpleCard';
import FlippingCard from './components/Cards/3dFlippingCard/FlippingCard';

function App() {
  const click = () => {
    alert("Clicked!")
  }

  return (
    <div className="App">
      <SimpleCard width="30rem">
        <Rating size='50'/>
      </SimpleCard>
      <FlippingCard width='30rem' front={<Rating size='50'/>} back={<Rating size='50'/>}></FlippingCard>
    </div>
  );
}

export default App;
