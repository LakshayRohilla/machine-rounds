import './App.css';
import Acordian from './components/accordian/accordian';
import TrafficLight from './components/trafficLight/trafficLight';
import UpperCaseCharCounter from './components/upperCaseCharCounter/upperCaseCharCounter';
import MainProgressBar from './components/progressBar/progressBar';
import AutoCompleteSearchBar from './components/autoCompleteSearchBar/autoCompleteSearchBar';
import MoneyMolApiData from './components/objectQuestions/moneyMolAPIdata';
import Todo from './components/todo/todo.jsx'

function App() {
  return (
    <div className="App" style={{}}>
      <Acordian/>
	    <TrafficLight/>
		<UpperCaseCharCounter/>
		<MainProgressBar/>
    <AutoCompleteSearchBar/>
    <MoneyMolApiData/>
    <Todo/>
    </div>
  );
}

export default App;
