import { ImInstagram, ImWhatsapp , ImLinkedin2 } from "react-icons/im";
import { Container,Col,Row } from "react-bootstrap";
// import MailChimpForm from "../MailChimpForm";
import "./Footer.css";
function Footer(){
    return(
 <footer className="footer">
  <Container>
    <Row className="align-item-center">
      {/* <MailChimpForm /> */}
      <Col sm={6}> 
      <h2 className="brand">rahman</h2>   
      </Col>
      <Col sm={6} className="text-center text-sm-end">
        <div className="social-icon">
        <a className="nav-link cd"  href="https://www.linkedin.com/in/abd-el-rahman-areef-45b07a250"><ImLinkedin2/></a>
        <a className="nav-link cd"  href=""><ImWhatsapp/></a>
        <a className="nav-link cd"  href=""><ImInstagram/> </a>
        </div>
        <p className="copyright"><span className="copy"> &copy;</span> CopyRight 2023. All Right Reserved by Abd El-Rahman Areef.</p>
      </Col>
    </Row>
  </Container>
 </footer>
    )
};

export default Footer;