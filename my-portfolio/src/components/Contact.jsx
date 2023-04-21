import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    subject: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [body, setBody] = useState('');


  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
    setBody(`Hola soy ${formDetails.firstName} ${formDetails.lastName}, %0D%0D${formDetails.message} %0DPuedes contactarme respondiendo a este correo o a mi número: ${formDetails.phone}. %0D%0DAtentamente,%0D${formDetails.firstName} ${formDetails.lastName}`)
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="" />
          </Col>
          <Col md={6}>
            <h2>Contáctame</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Nombres"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Apellidos"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.subject}
                    placeholder="Asunto"
                    onChange={(e) => onFormUpdate("subject", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("Celular", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Mensaje"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <a href={`mailto:jars9605@gmail.com?subject=${formDetails.subject.replace(/ /g, '%20')}&body=${body} `}>
                  <button type="button" >
                    <span>Enviar</span>
                  </button></a>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
