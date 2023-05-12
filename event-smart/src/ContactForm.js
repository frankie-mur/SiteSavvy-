import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfEvent: "",
    typeOfEvent: "",
    email: "",
    phoneNumber: "",
    find: "",
    details: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:5001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Form className="m-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicSelect">
        <Form.Label>Type of event</Form.Label>
        <Form.Select
          value={formData.typeOfEvent}
          onChange={(e) =>
            setFormData({ ...formData, typeOfEvent: e.target.value })
          }
        >
          <option value="">-- Select type of event --</option>
          <option value="option1">Bar Mitzvah</option>
          <option value="option2">Bat Mitzvah</option>
          <option value="option3">School Event</option>
          <option value="option3">Wedding</option>
          <option value="option3">Corporate</option>
          <option value="option3">Holiday</option>
          <option value="option3">Other</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formDateOfEvent">
        <Form.Label>Date of Event</Form.Label>
        <Form.Control
          type="date"
          placeholder="Date of Event"
          value={formData.dateOfEvent}
          onChange={(e) =>
            setFormData({ ...formData, dateOfEvent: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="fromPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formHowDidYouFind">
        <Form.Label>How did you find us?</Form.Label>
        <Form.Control
          type="text"
          placeholder="How did you find us?"
          value={formData.howDidYouFind}
          onChange={(e) =>
            setFormData({ ...formData, howDidYouFind: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Your Event Details, Questions, and/or Comments"
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, details: e.target.value })
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
