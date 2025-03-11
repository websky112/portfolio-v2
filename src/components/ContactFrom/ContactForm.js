import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";

const ContactForm = () => {
  const form = useRef();
  const [forms, setForms] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast.success("Message Sent successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setForms({
              name: "",
              email: "",
              service: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            toast.error("Ops Message not Sent!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
    } else {
      validator.showMessages();
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      ref={form}
      className="contact-validation-active"
    >
      <div className="row">
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.name}
              type="text"
              name="name"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Name"
            />
            {validator.message("name", forms.name, "required|alpha_space")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.email}
              type="email"
              name="email"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Email"
            />
            {validator.message("email", forms.email, "required|email")}
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <input
              value={forms.phone}
              type="phone"
              name="phone"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your phone"
            />
            {validator.message("phone", forms.phone, "required|phone")}
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <select
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.service}
              type="text"
              name="service"
            >
              <option>Choose a Service</option>
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>Fullstack Development</option>
              <option>Web Development</option>
              <option>Mobile Development</option>
            </select>
            {validator.message("service", forms.service, "required")}
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <textarea
            onBlur={(e) => changeHandler(e)}
            onChange={(e) => changeHandler(e)}
            value={forms.message}
            type="text"
            name="message"
            placeholder="Message"
          ></textarea>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>
      <div className="submit-area">
        <button type="submit" className="theme-btn">
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
