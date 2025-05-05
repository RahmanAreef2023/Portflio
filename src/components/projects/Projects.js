import { Container ,Row ,Col,Tab } from "react-bootstrap";
import projectImg1 from "../imges/project-img1.png"
import projectImg2 from "../imges/project-img2.png"
import projectImg3 from "../imges/project-img3.png"
import ProjectCard from "./projectCard";
import Nav from 'react-bootstrap/Nav';
import React from "react";
import "./Projects.css";
function Projects (){

    const projects = [
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projectImg1,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projectImg2,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projectImg3,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projectImg1,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projectImg2,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projectImg3,
},
];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
              <h2>my project </h2>
                  <p> my name is abd el-rahman, i live in el-behira, this is my first project in react development.</p>
                 <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                     <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                             </Nav.Item>
                                     <Nav.Item>
                                         <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                   </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                      return(
                          <ProjectCard key={index} {...project} />
                            )
                            })
                            }
                                </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">black egale</Tab.Pane>
                                <Tab.Pane eventKey="third">if you want, i can help you to build frontend project by react.</Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
};
export default Projects;