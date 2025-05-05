// import { Alert } from "react-bootstrap";
// import { useState } from "react";
// import { useEffect } from "react";
// import {Col ,Row} from "react";
// function NewsLetter({onValidated, status, message }){
// const [email ,setEmail] =useState('');

// useEffect(() =>{
// if ( status ==='success'){
// clearFields();
// }

// },[status])

// const handleSubmit = (e) =>{ 
//     e.preventDefault();
//     email&&
//     email.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL:email
//     })
// };

// const clearFields = () =>{
//     setEmail('');
// }

//     return(
//    <Col lg={12}>
//      <div className="newsletter-bx">
//         <Row>
//           <Col lg={12} md={6} xl={5}> 
//             <h3>dear, see my projects at once  and leave your e-mail here.</h3>
//              {status==='sending' && <Alert>Sending...</Alert>}
//              {status==='error' && <Alert variant="danger">{message}</Alert>}
//              {status==='success' && <Alert variant="success">{message}</Alert>}
//           </Col>
//           <Col md={6} xl={7}>
//              <form onSubmit={handleSubmit}>
//                <div className="new-emai-bx">
//                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value) } Placeholder="Email Address" />
//                  <button type="submit">Submit</button>
//                </div>
//              </form>
//           </Col>
//         </Row>
//        </div>
//       </Col>
//     )
// };
// export default NewsLetter;