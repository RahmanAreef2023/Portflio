import  {React, useState } from "react";
import "./Header.css";
import { ImFacebook2 , ImWhatsapp , ImLinkedin2 } from "react-icons/im";
function Header (){
    const [ active , setActive ] = useState("nav-menu");
    const [ toggleIcon , setToggleIcon ] = useState("nav-toggler");
    const navToggle = () =>{
        active === "nav-menu" 
        ? setActive ("nav-menu nav-active")
        : setActive("nav-menu");
///////////// togglerIcon
       toggleIcon === "nav-toggler"
       ?setToggleIcon("nav-toggler toggle")
       :setToggleIcon("nav-toggler")
    };

    return(
 <nav className="nav">
    <a className="nav-brand" href="#">rahman</a>
  <ul className={ active } >
    <li className="nav-item">
        <a className="nav-link hm" href="" >
            Home
            </a>
            </li>
    <li className="nav-item">
        <a className="nav-link hm" href="" >
            Skills
            </a>
            </li>
    <li className="nav-item">
        <a className="nav-link hm" href="" >
            projects
            </a>
            </li>
    <li className="nav-item">
        <a className="nav-link cd"  href="https://www.linkedin.com/in/abd-el-rahman-areef-45b07a250">
            < ImLinkedin2/>
                </a>
                </li>
    <li className="nav-item">
        <a className="nav-link cd"  href="">
            <ImWhatsapp/>
                </a>
                </li>
    <li className="nav-item">
        <a className="nav-link cd"  href="">
        <ImFacebook2/>
                </a>
                </li>
    <li className="nav-item">
        <span><button>
        Let's Connect
                </button></span>
                </li>
    </ul> 
    <div onClick = {navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>  
</nav>

    )
};

export default Header;