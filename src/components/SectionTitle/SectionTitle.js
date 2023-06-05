import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-12">
        <div className="wpo-section-title">
          <h2>{props.Title}</h2>
          <p>
            Please use the form below to get in touch with me regarding
            collaboration, employment opportunities, or any other inquiries you
            may have. I will do my best to respond to your message in a timely
            manner. Thank you for taking the time to reach out
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
