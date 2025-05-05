import React from "react";
import "./Banner.css"
import { Container , Row , Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HomeImg from "../imges/istockphoto-1400570540-170667a.jpg"
import {useState ,useEffect} from "react";
function Banner (){
const [ loopNum , setLoopNum]  = useState(0);
const [ isDeleting , setIsDeleting]  = useState(false);
const toRotate = [ "FrontEnd Developer.", "BackEnd Developer.", "FullStack Developer." ];
const [text , setText] = useState('');
const [delta ,setDelta] = useState(300 - Math.random()*100);
const period = 3000;
useEffect(() => {
 let ticker = setInterval(() => {
  tick();
 },delta) 
 return() => {clearInterval(ticker)}; 
}, [text])

const tick = () =>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);
    setText(updateText);
    if(isDeleting){    
         setDelta(prevDelta => prevDelta/2)
         }
    if(!isDeleting && updateText=== fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updateText === '') {
         setIsDeleting(false);
         setLoopNum(loopNum + 1);
         setDelta(500);
    }
}

    return(
 <section className="banner" id="home">
<Container>
    <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
        <span className="tagline">welcom to my portfolio</span>   
        <h1>{`Hi I'm Abd El-Rahman Areef `} <span className="wrap">{text}</span></h1> 
        <p>Hello Everyone, I Have one year of Experience in Web Development.</p>
        <button onClick={() => console.log('conect')}>< ArrowRightCircle size={25}/>Let's conect</button>
        </Col>
        <Col xs={15} md={6} xl={5}>
            <img src={HomeImg} alt="Header Img" />  
        </Col>
    </Row>
</Container>
 </section>
    )
};
export default Banner;