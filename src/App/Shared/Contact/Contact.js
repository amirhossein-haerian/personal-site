import React, { Component } from "react";
import "./contact.css";
// import emailjs from '@emailjs/browser';
import { FaInstagram, FaTelegram, FaLinkedinIn, FaGithub, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
    };
  }

//   sendFeedback = (templateId, variables) => {
//     emailjs
//       .send("gmail", templateId, variables)
//       .then((res) => {
//         console.log("Email successfully sent!");
//       })
//       .catch((err) => console.error("Oh well, you failed. Here some thoughts on the error that occured:", err));
//   };

  render() {
    return (
      <div className="contact-main-container">
        <h2 className="contact-title">Contact Me</h2>
        <div className="row row-fix d-flex align-items-center justify-content-center">
          {/* <div className="my-3 col-lg-6">
            <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight" className="contact-container">
              <form
                className="form-container"
                onSubmit={(e) => {
                  e.preventDefault();
                  emailjs.sendForm("service_as2n8vd", "template_d72pof4", e.target, {
					publicKey: 'hWC4ElwRsy9Ja5rrY',
				  }).then(
                    (result) => {
                      console.log(result.text);
                    },
                    (error) => {
                      console.log(error.text);
                    }
                  );
                  this.setState({
                    name: "",
                    email: "",
                    description: "",
                  });
                }}
              >
                <div className="row row-fix">
                  <div className="my-2 col-md-6">
                    <input
                      className="form-name"
                      placeholder="Write your name"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({
                          name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="my-2 col-md-6">
                    <input
                      className="form-email"
                      placeholder="Write your email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <textarea
                  className="form-textArea"
                  rows="4"
                  placeholder="Write your message..."
                  name="description"
                  value={this.state.description}
                  onChange={(e) => {
                    this.setState({
                      description: e.target.value,
                    });
                  }}
                />
                <input className="form-submit" type="submit" value="Send" />
              </form>
            </ScrollAnimation>
          </div> */}
          <div className="my-3">
            <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight">
              <p className="contact-icons-text">If you like, you can follow me on social media:</p>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight" className="d-flex align-items-center justify-content-center">
              <a href="https://www.instagram.com/amirhossein_haerian/">
                <FaInstagram className="contact-icons" color="#c13584" />
              </a>
              <a href="https://t.me/amirho3inha">
                <FaTelegram className="contact-icons" color="#0088cc" />
              </a>
              <a href="https://www.linkedin.com/in/amirhossein-haerian-665879153/">
                <FaLinkedinIn className="contact-icons" color="#0077b5" />
              </a>
              <a href="https://github.com/amirhossein-haerian">
                <FaGithub className="contact-icons" color="#333" />
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight">
              <p className="contact-icons-text my-3">Or use my email or phone number to contact me:</p>
              <p className="phone-mail">
                <FaRegEnvelope className="phone-mail-icon" /> haerian.amirhossein@gmail.com
              </p>
              <p className="phone-mail">
                <FaMobileAlt className="phone-mail-icon" /> +46 0764049257
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
