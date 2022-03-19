import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Wrapper from "../components/Wrapper";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="bg-light text-light contact-area" id="contact">
      <div className="contact-header">
        <h1 style={{ textAlign: "center" }}>Contact Me</h1>
      </div>
      <Wrapper className="bg-light text-light">
        {/* Contact Form */}
        <Container className="form">
          <Row size="md-12 text-center" className="bg-light text-light">
            <Col size="md-10">
              <form
                id="contact-form"
                method="POST"
                action="https://formspree.io/f/xknyzper"
              >
                <div className="controls">
                  <Row className="text-center">
                    <Col size="md-6">
                      <div class="form-group">
                        {/* First Name */}
                        <label for="form_name">First Name *</label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Nick"
                          required="required"
                          data-error="Firstname is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </Col>

                    <Col size="md-6">
                      <div className="form-group">
                        {/* Last Name */}
                        <label for="form_lastname">Last Name *</label>
                        <input
                          id="form_lastname"
                          type="text"
                          name="surname"
                          class="form-control"
                          placeholder="Blah"
                          required="required"
                          data-error="Lastname is required."
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col size="md-6">
                      <div className="form-group">
                        {/* Email */}
                        <label for="form_email">E-mail *</label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="example@email.com"
                          required="required"
                          data-error="Valid email is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </Col>

                    <Col size="md-6">
                      <div className="form-group">
                        {/*  Phone */}
                        <label for="form_phone">Phone</label>
                        <input
                          id="form_phone"
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="XXX-XXX-XXXX"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col size="md-12">
                      <div className="form-group">
                        {/*  Message  */}
                        <label for="form_message">Message *</label>
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Message for me"
                          rows="6"
                          required="required"
                          data-error="Please include a message."
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </Col>
                  </Row>

                  <Col size="md-12">
                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="btn-send"
                      variant="outline-primary"
                      size="sm"
                    >
                      Send Message
                    </Button>
                  </Col>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
}

export default Contact;
