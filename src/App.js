import './App.css';
import Acordian from './components/accordian/accordian';
import TrafficLight from './components/trafficLight/trafficLight';
import UpperCaseCharCounter from './components/upperCaseCharCounter/upperCaseCharCounter';
import MainProgressBar from './components/progressBar/progressBar';

function App() {
  return (
    <div className="App" style={{}}>
      <Acordian/>
	    <TrafficLight/>
		<UpperCaseCharCounter/>
		<MainProgressBar/>
    </div>
  );
}

export default App;
