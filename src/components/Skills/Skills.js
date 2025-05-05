import React from "react";
import "./Skills.css"
import { Container , Row , Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../imges/meter1.svg";
import meter2 from "../imges/meter2.svg";
import meter3 from "../imges/meter3.svg";
 function Skills (){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
<section className="skill" id="skill">
<Container>
    <Row>
        <Col>
        <div className="skill-box">
            <h2>skills</h2>
            <p>dear, you can see my skills her.</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={meter1} alt="Img"/>
                   <h5>frontend development</h5> 
                </div>
                <div className="item">
                    <img src={meter2} alt="Img"/>
                   <h5>data science</h5> 
                </div>
                <div className="item">
                    <img src={meter3} alt="Img"/>
                   <h5>backend development</h5> 
                </div>
                <div className="item">
                    <img src={meter1} alt="Img"/>
                    <h5>frontend development</h5> 
                </div>
            </Carousel>
        </div>
        </Col>
    </Row>
</Container>
</section>
    )
 };
 export default Skills;