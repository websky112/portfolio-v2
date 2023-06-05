import React from "react";
import { Dialog, Grid } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Contact from "./contact";
import RelatedProject from "./related";

import "./style.css";

const ProjectSingle = ({ maxWidth, open, onClose, state }) => {
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <i className="fa fa-close"></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  if (!state) return <></>;

  const { companySummary, title, featureSummary, features, mission, imgs } =
    state;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="modalWrapper quickview-dialog"
      maxWidth={maxWidth}
    >
      <DialogTitle id="customized-dialog-title" onClose={onClose}></DialogTitle>
      <Grid className="modalBody modal-body project-modal">
        <div className="wpo-project-single-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12">
                <div className="wpo-project-single-wrap">
                  <div className="wpo-project-single-item">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <div className="wpo-project-single-title">
                          <h3 style={{ color: "#59C378", fontWeight: "bold" }}>
                            {title} Project
                          </h3>
                        </div>
                        <p style={{ marginBottom: 0 }}>{companySummary}</p>
                      </div>
                    </div>
                  </div>
                  <div className="wpo-project-single-item">
                    <div className="wpo-project-single-title">
                      <h3>Mission</h3>
                    </div>
                    <p>{mission}</p>
                  </div>
                  <div className="wpo-project-single-item list-widget">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="wpo-project-single-title">
                          <h3>Features</h3>
                        </div>
                        <p>{featureSummary}</p>
                        <ul>
                          {features &&
                            features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <div className="wpo-project-single-item-quote">
                          <p>
                            "Amazing looking theme and instantly turns your
                            application into a great looking one. Really shows
                            that pro_ fessionals built this theme up. Very happy
                            with the way the theme looks ."
                          </p>
                          <span>
                            Robert - <span>Yellow Theme</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wpo-project-single-gallery">
                    <div className="row mt-4">
                      {imgs.map((img, idx) => (
                        <div key={idx} className="col-md-12 col-sm-12 col-12">
                          <div className="wpo-p-details-img">
                            <img src={img} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <RelatedProject />
                  <div className="wpo-project-single-item">
                    <div className="wpo-project-contact-area">
                      <div className="wpo-contact-title">
                        <h2>Have project in mind? Let's discuss</h2>
                        <p>
                          Get in touch with us to see how we can help you with
                          your project
                        </p>
                      </div>
                      <div className="wpo-contact-form-area">
                        <Contact />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Dialog>
  );
};
export default ProjectSingle;
