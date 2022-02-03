import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import List from './components/List';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const page = (
<div>
  <h1 className="header"> This is JSX </h1>
  <p> This is a Paragraph</p>
</div>


)

function TemporaryName() {
  return (
    <div>
   <img src="./logo192.png"/>
   <h1> Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originaly created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>

    </div>

  );
}

export default TemporaryName;

