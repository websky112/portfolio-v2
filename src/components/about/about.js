import React from "react";

import shape1 from "../../images/about/shape1.png";
import shape2 from "../../images/about/shape2.png";

const About = (props) => {
  return (
    <div className="wpo-about-area section-padding" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="wpo-about-exprience-wrap">
              <div className="wpo-about-exprience">
                <h2>10</h2>
                <span>Years of Experience</span>
              </div>
              <div className="client">
                <h3>
                  <span data-count="100">100</span>%
                </h3>
                <p>Clients Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
            <div className="wpo-about-content">
              <div className="wpo-about-title">
                <h2>My Advantage</h2>
                <p>
                  As a senior software engineer, I bring extensive experience
                  and expertise in developing high-quality software solutions.
                  With a strong background in designing and implementing complex
                  systems, I excel in creating efficient and scalable
                  applications.
                </p>
              </div>
              <div className="wpo-about-funfact">
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="98">98</span>%
                    </h3>
                    <p>React.js</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="92">92</span>%
                    </h3>
                    <p>React Native</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="88">94</span>%
                    </h3>
                    <p>Next.js</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="72">88</span>%
                    </h3>
                    <p>Node.js</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="43">76</span>%
                    </h3>
                    <p>Python</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="37">62</span>%
                    </h3>
                    <p>AWS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-shape">
        <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
          <g opacity="0.3" filter="url(#filter0_f_39_4267)">
            <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4267"
              x="-500"
              y="0"
              width="1495"
              height="1495"
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
                stdDeviation="250"
                result="effect1_foregroundBlur_39_4267"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="ab-shape-s2">
        <svg width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
          <g opacity="0.15" filter="url(#filter0_f_39_4265)">
            <circle cx="950" cy="950.004" r="450" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4265"
              x="-0.00012207"
              y="0.00402832"
              width="1900"
              height="1900"
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
                stdDeviation="250"
                result="effect1_foregroundBlur_39_4265"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="line-shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="line-shape-2">
        <img src={shape2} alt="" />
      </div>
    </div>
  );
};

export default About;
