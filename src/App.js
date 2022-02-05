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

function Page() {
  return (
    <div>
      <Header/>
      <H1/>
      <Lo/>
      <Footer/>
    </div>
  )
}


function Header(){
  return(
    <header>
      <nav><img src = "./logo192.png" width={150}/> </nav>
      </header>
  )
}
function Footer(){
  return(
    <footer>
        <small>© 2022 Graus development. All rights reserved. </small>
        </footer>
  )
}
function Lo(){
  return(
<ol>
          <li>It's a popular library, so I'll be 
          able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
  )
}
function H1(){
  return(
<h1>Reasons I'm excited to learn React</h1>    
  )
}
export default Page;


