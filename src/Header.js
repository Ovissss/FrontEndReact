import React from "react"


function Header(){
    return(
      <header className="header">
        <nav>
          <img className="logo" src = "./logo192.png" /> 
        </nav>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </header>
    )
  }

  export default Header