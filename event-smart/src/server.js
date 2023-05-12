const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5001, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "........@gmail.com",
    pass: "some_password",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server up and running..");
  }
});

router.post("/contact", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const dateOfEvent = req.body.dateOfEvent;
  const typeOfEvent = req.body.typeOfEvent;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const howDidYouFind = req.body.find;
  const details = req.body.details;
  const mail = {
    from: email,
    to: "frankidatank@gmail.com",
    subject: "Event Inquiry",
    html: `<p>Name: ${firstName + " " + lastName}</p>
           <p>Email: ${email}</p>
           <p>Date of Event: ${dateOfEvent}</p>
           <p>Phone number: ${phoneNumber}<p>
           <p>How they found us: ${howDidYouFind}<p>
           <p>Type of event: ${typeOfEvent}
           <p>Message: ${details}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
