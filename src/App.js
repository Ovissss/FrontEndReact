import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import List from './components/List';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ClassNames } from '@emotion/react';
import Header from "./Header"
import Lo from "./Main"
import Footer from "./Footer"



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
function H1(){
  return(
<h1>Reasons I'm excited to learn React</h1>    
  )
}
export default Page;


