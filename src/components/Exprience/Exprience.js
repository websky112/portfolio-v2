import React from "react";

import logo1 from "../../images/work/1.svg";
import logo2 from "../../images/work/2.png";
import logo3 from "../../images/work/3.png";
import logo4 from "../../images/work/4.png";
import logo5 from "../../images/work/5.jpeg";
import SectionTitle from "../SectionTitle/SectionTitle";

const Expriences = [
  {
    date: "2020 - 2023",
    logo: logo1,
    position: "Lead Engineer",
    companyName: "MotorPlatform LTD, AUS.",
    workFrom: "Full time, Sydney",
    link: "https://www.motorplatform.com.au/",
  },
  {
    date: "2019 - 2020",
    logo: logo2,
    position: "Senior Full Stack Engineer",
    companyName: "Vivino, USA.",
    workFrom: "Contract, Remote",
    link: "https://www.vivino.com/app",
  },
  {
    date: "2018 - 2019",
    logo: logo3,
    position: "Security Frontend Engineer",
    companyName: "CSE Insurance Group, USA.",
    workFrom: "Contract, Remote",
    link: "https://cseinsurance.com/",
  },
  {
    date: "2016 - 2018",
    logo: logo4,
    position: "Full Stack Engineer",
    companyName: "Blip Technologies, USA.",
    workFrom: "Full time, Remote",
    link: "https://shop.carblip.com",
  },
  {
    date: "2013 - 2016",
    logo: logo5,
    position: "Full Stack Engineer",
    companyName: "HangarA, USA.",
    workFrom: "Full time, Remote",
    link: "https://hangara.com/",
  },
];

const Exprience = (props) => {
  return (
    <div className="wpo-work-area section-padding" id="experience">
      <div className="container">
        <div className="wpo-section-title">
          <h2>My Work Experience</h2>
        </div>
        <div className="wpo-work-wrap">
          {Expriences.map((exprience, exp) => (
            <div className="wpo-work-item" key={exp}>
              <ul>
                <li className="date">{exprience.date}</li>
                <li className="logo">
                  <div className="logo-container">
                    <img
                      src={exprience.logo}
                      style={{ objectFit: "contain" }}
                      alt=""
                    />
                  </div>
                </li>
                <li className="position">
                  {exprience.position}{" "}
                  <span>
                    {exprience.companyName} <span>{exprience.workFrom}</span>
                  </span>
                </li>
                <li className="link">
                  <a href={exprience.link} target="_blank" rel="noreferrer">
                    Go to website
                  </a>
                </li>
              </ul>
            </div>
          ))}
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
    </div>
  );
};

export default Exprience;
