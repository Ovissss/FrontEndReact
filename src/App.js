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

function App() {
  return (
    <div className="App">  
  {page1} 
  {navbar}
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

const navbar = (
  <nav>
      <h1>Bob's Bistro</h1>
      <ul>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  </nav>
)

const page1 =(
<div>
<h1>My awesome website in React</h1>
<h3>Reasons I love React</h3>
<ol>
  <l1>It's Composable</l1>
  <l1>It's Declerative</l1>
  <l1>It's a hirible skill</l1>
  <l1>It's actevily maintained by skilled people</l1>
</ol>
</div>

)