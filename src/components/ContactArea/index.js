import React from "react";

import ContactForm from "../ContactFrom/ContactForm";
import SectionTitle from "../SectionTitle/SectionTitle";

const ContactArea = (props) => {
  return (
    <section
      className={`wpo-contact-area section-padding ${props.contactclass}`}
      id="contact"
    >
      <div className="wpo-wpo-contact-form-map">
        <div className="container">
          <div className="row">
            <SectionTitle Title={"Let's Talk"} />
          </div>
          <div className="row">
            <div className="co-lg-10 offset-lg-1  col-12">
              <div className="row">
                <div className="col col-lg-6 col-md-12 col-12">
                  <div className="wpo-contact-form">
                    <h2>Get In Touch</h2>
                    <ContactForm />
                  </div>
                </div>
                <div className="col col-lg-6 col-md-12 col-12">
                  <div className="wpo-contact-info">
                    <div className="info-item">
                      <h2>Austin, TX 78758</h2>
                      <div className="info-wrap">
                        <div className="info-icon">
                          <i className="fi flaticon-location"></i>
                        </div>
                        <div className="info-text">
                          <span>Home Address</span>
                        </div>
                      </div>
                    </div>
                    <div className="info-item">
                      <h2>kaiwenshen4@gmail.com</h2>
                      <div className="info-wrap">
                        <div className="info-icon">
                          <i className="fi flaticon-mail"></i>
                        </div>
                        <div className="info-text">
                          <span>Personal Mail</span>
                        </div>
                      </div>
                    </div>
                    <div className="info-item">
                      <h2>+1 561-437-2202</h2>
                      <div className="info-wrap">
                        <div className="info-icon">
                          <i className="fi flaticon-phone-call"></i>
                        </div>
                        <div className="info-text">
                          <span>Mobile Phone</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-wk">
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4214)">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4214"
              x="0"
              y="0"
              width="1500"
              height="1500"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="275"
                result="effect1_foregroundBlur_39_4212"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ContactArea;
