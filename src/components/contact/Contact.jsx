import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./contact.scss";

const Contact = () => {
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
                    <div className="contact-data-desc">
                      +94 776603689
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <div className="contact-top">
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                className="text-input"
              />
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                className="text-input"
              />
            </div>
            <div className="contact-middle">
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                className="text-input"
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                className="text-input"
                multiline
                rows={4}
              />
            </div>
            <div className="contact-bottom">
              <Button variant="contained" className="send-btn">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
