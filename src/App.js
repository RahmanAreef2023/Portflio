import "./App.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Projects from "./components/projects/Projects"
function App (){
    return(
<div className="App">
 <Header />
 <Banner />
 <Skills />
 <Projects />
<Contact />
<Footer />
</div>
    )
};
export default App;