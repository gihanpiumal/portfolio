import React, { useState , useRef} from "react";
import Joi from "joi";
import emailjs from "@emailjs/browser";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./contact.scss";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState([]);
  const forms = useRef();

  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string()
      .regex(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/)
      .messages({ "string.pattern.base": `"Please provide valide email` })
      .required(),
    subject: Joi.string().required().label("Subject"),
    message: Joi.string().required().label("Message"),
  });

  const validate = () => {
    const option = {
      abortEarly: false,
    };

    const { error } = schema.validate(form, option);

    if (!error) return null;
    const errorData = {};
    for (let item of error.details) {
      const name = item.path[0];
      const message = item.message;
      errorData[name] = message;
    }

    console.log(errors);
    setErrors(errorData);
    return errorData;
  };

  const validateProperty = (name, value) => {
    const option = {
      abortEarly: false,
    };

    // const { form, errors } = this.state;
    form[name] = value.currentTarget.value;
    const { error } = schema.validate(form, option);

    const errorData = {};
    setErrors({ ...errors, [name]: null });
    if (error) {
      for (let item of error.details) {
        if (item.path[0] === name) {
          console.log(item.path[0]);
          setErrors({ ...errors, [name]: item.message });
        }
      }
    }
  };

  const clearState = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const submit = () => {
    if (validate()) {
      return;
    }
    emailjs
      .sendForm(
        "service_ptdlzd9",
        "template_201e3gb",
        forms.current,
        "zm8x49rrTUyvXyNUc"
      )
      .then(
        (result) => {
          clearState()
        },
        (error) => {
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="wrapper-contact">
        <div className="title-contact">Contact</div>
        <div className="description-contact">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          quod nesciunt id nam sapiente amet dolorem corrupti ab reiciendis
          nobis adipisci aliquam nemo cumque distinctio ut temporibus quam,
          itaque voluptatem.
        </div>
        <div className="data-contact">
          <div className="details-contact">
            <ul>
              <li>
                <div className="details-data-contact">
                  <div className="icon-contact">
                    <LocationOnIcon className="icon-icon" />
                  </div>
                  <div className="other-contact-data">
                    <div className="contact-data-topic">Location</div>
                    <div className="contact-data-desc">
                      No 337, Perera Road, Alubomulla, Panadura, Sri Lanka
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="details-data-contact">
                  <div className="icon-contact">
                    <EmailIcon className="icon-icon" />
                  </div>
                  <div className="other-contact-data">
                    <div className="contact-data-topic">Email</div>
                    <div className="contact-data-desc">
                      gihanpiumal12345@gnail.com
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="details-data-contact">
                  <div className="icon-contact">
                    <PhoneIcon className="icon-icon" />
                  </div>
                  <div className="other-contact-data">
                    <div className="contact-data-topic">Phone</div>
                    <div className="contact-data-desc">+94 776603689</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <form className="contact-form" ref={forms} >
            <div className="contact-top">
              <div className="form-input">
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  value={form.name}
                  name={"name"}
                  onChange={(e) => {
                    validateProperty("name", e);
                  }}
                  className="text-input"
                />
                {errors.name && (
                  <div className="alert-danger">
                    <p>{errors.name}</p>
                  </div>
                )}
              </div>
              <div className="form-input">
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  value={form.email}
                  name={"email"}
                  onChange={(e) => {
                    validateProperty("email", e);
                  }}
                  className="text-input"
                />
                {errors.email && (
                  <div className="alert-danger">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="contact-middle">
              <div className="form-input-middle">
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  name={"subject"}
                  onChange={(e) => {
                    validateProperty("subject", e);
                  }}
                  value={form.subject}
                  className="text-input"
                />
                {errors.subject && (
                  <div className="alert-danger">{errors.subject}</div>
                )}
              </div>
              <div className="form-input-middle">
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  className="text-input"
                  name={"message"}
                  onChange={(e) => {
                    validateProperty("message", e);
                  }}
                  value={form.message}
                  multiline
                  rows={4}
                />
                {errors.message && (
                  <div className="alert-danger">{errors.message}</div>
                )}
              </div>
            </div>
            <div className="contact-bottom">
              <Button variant="contained" className="send-btn" onClick={submit}>
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
