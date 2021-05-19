import React, { useState } from "react";
import Navbar from "./Navbar";
import Application from "./Application";
import image from "../logo.png";
import $ from "jquery";

function Main() {
  const [submitted, setSubmitted] = useState(false);
  const [finished] = useState(false);

  const submit = (values) => {
    if (!finished) {
      $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbzpB9T4lY87VBslH7v2Pc_DcDZl38VXyOX7W76qfHD76i8DZypos4Wtvy1FFFxRUDhoMQ/exec",
        method: "POST",
        dataType: "json",
        data: values,
        success: () => {
          setSubmitted(true);
        },
        error: () => {
          alert("Your application didn't get saved successfully. Please try again.");
        }
      });
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="site-layout"
        style={{ padding: "0 50px", marginTop: "100px" }}
      >
        <div className="row">
          <div className="col-lg-2 col-sm-0"></div>
          <div
            className="col-lg-8 col-sm-12"
            style={{ backgroundColor: "#eee", paddingTop: "1rem" }}
          >
            <div className="info-section">
              <div className="logo row">
                <div className="col-4"></div>
                <div className="col-lg-4 col-sm-0 col-md-2">
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={image}
                    alt="Energia Powered's logo"
                  />
                </div>
              </div>
              <div className="name">
                <div className="col">
                  <h1 style={{ fontSize: "1.8rem", textAlign: "center" }}>
                    Energia Powered
                  </h1>
                </div>
              </div>
              <div
                className="info"
                style={{ padding: "0.8rem", textAlign: "center" }}
              >
                {submitted ? (
                  <p>
                    Thank you for filling out your information!<br />
                    We will get in touch with you for more details about the sessions as soon as possible. So, keep waiting for us.<br />
                    And if you have any questions, don’t hesitate to ask us through our page messages.
                  </p>
                ) : (
                  <div>
                    <p>
                      Energia Powered is a student activity, which was founded in Cairo University 9 years ago.<br />
                      This application form to join our Energia Gates Sessions, so if you are interested, fill this form and join us.
                    </p>
                    {finished && (
                      <h4>
                        The form is closed
                        <span role="img" aria-label="sad">
                          😥
                        </span>
                        <br />
                        Better luck next time
                        <span role="img" aria-label="twink">
                          😉
                        </span>
                      </h4>
                    )}
                  </div>
                )}
              </div>
              {submitted || finished ? null : <Application submit={submit} />}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">©2021 Energia Powered</div>
    </>
  );
}

export default Main;
