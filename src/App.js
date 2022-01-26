import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import List from './components/List';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




function App() {
  return (
    <div className="App">
     
      <Test></Test>
      <List /> 
      <Select options={
        [{label: "pirmas"}, {label: "antras"}]
      } />
      <DatePicker />
        <h1>I'm learning React !!</h1>
    </div>
  );
}



export default App;
