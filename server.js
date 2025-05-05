const express = require("express");
const router =express.Router();
const cors  = require("cors");
const nodemailer =require("nodemailer");

// server used to send emails
const app =express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

const ContactEmail = nodemailer.createTransport({
    service:'gmail',
    auth: {
          user:"********@gmail.com",
          pass:"",
},
});

ContactEmail.verfiy((error) => {
    if(error){
        console.log(error)    
    }
    else{
        console.log("Ready to send");
    }
})

router.post("/contact", (req, res) => {
const name = req.body.firstName + req.body.lastName;
const email = req.body.email;
const message = req.body.message;
const phone = req.body.phone;
const mail = {
    form: name,
    to:"********@getDefaultNormalizer.com",
    subject:"contact From Submissition - Portoflio",
    html: `<p>Name: ${name} </p>
          <p>Email: ${email} </p>
          <p>Phone: ${phone} </p>
          <p>Message: ${message} </p>`,

};
    ContactEmail.sendMail(mail, (error) => {
    if(error){
        res,json(error);
    }
    else{
        res.json({code:200, status:"message sent"});
    }
});
});