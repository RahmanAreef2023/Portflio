import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../imges/5c1d70c2a1461829bdb45513b80e096b.jpg"
import { useState } from "react";
import "./Contact.css"
function Contact (){
    const formInitialDetails ={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    }
    const[formDetails ,setFormDetails] = useState(formInitialDetails);
    const [buttonText ,setButtonText] = useState('Send');
    const [status ,setStatus] = useState({});

    const onFormUpdate =(category, value) =>{
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) =>{ 
      e.preventDefault();
      setButtonText('Sending...');
      let response = await fetch("http://localhost:3000/contact",{
        method: "POST",
        headers: {
            "content-type": "Application/json;charset=utf-8"
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = response.json();
      setFormDetails(formInitialDetails);
      if(result.code ===200){
        setStatus({ success:true, message:'Message sent successfully'});
      } else {
        setStatus({success:false, message:'Something went wrong, please try again later.'})
      }

    };

    return(
<section className="Contact" id="Connect">
<Container>
    <Row className="align-items-center">
        <Col md={6}>
          <img src={contactImg} alt="Contact Us"/>
        </Col>
        <Col md={6}>
            <h2>get in touch</h2>
            <form onSubmit={handleSubmit}>
            <Row>
                <Col sm={6} className="px-1">
                   <input type="text" placeholder="First Name" value = {formDetails.firstName} onChange = {(e) => onFormUpdate['firstName',e.target.value]}/>
                </Col>
                <Col sm={6} className="px-1">
                   <input type="text" placeholder="Last Name" value = {formDetails.lastName} onChange = {(e) => onFormUpdate['lastName',e.target.value]}/>
                </Col>
                <Col sm={6} className="px-1">
                   <input type="email" placeholder="E-mail" value = {formDetails.email} onChange = {(e) => onFormUpdate['email',e.target.value]}/>
                </Col>
                <Col sm={6} className="px-1">
                   <input type="tel" placeholder="Phone No." value = {formDetails.phone} onChange = {(e) => onFormUpdate['phone',e.target.value]}/>
                </Col>
                <Col  className="px-1">
                   <input type="textarea" row="6"  placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate['textarea',e.target.value]}/>
                   <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                    status.message &&
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                }
            </Row>
            </form>          
        </Col>
    </Row>
</Container>
</section>
    )
};
export default Contact;