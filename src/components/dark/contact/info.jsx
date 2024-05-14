"use client";
import React from "react";

function Info() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    setResult("loading");
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ea556efa-5ab6-4941-a926-1a4709392d51");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("done");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("error");
    }
  };
  return (
    <div
      className="sec-box contact section-padding bord-thin-top"
      data-scroll-index="5"
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
            <h2 className="fz-50">Let is make your brand brilliant!</h2>
            <p className="fz-15 mt-10">
              If you would like to work with me or just want to get in touch,
              we’d love to hear from you!
            </p>

            <ul className="rest social-text d-flex mt-60">
              <li className="mr-30">
                <a
                  href="https://github.com/HamzaHamani"
                  target="_blank"
                  className="hover-this"
                >
                  <span className="hover-anim">Github</span>
                </a>
              </li>
              <li className="mr-30">
                <a
                  href="https://api.whatsapp.com/send?phone=212693517484"
                  target="_blank"
                  className="hover-this"
                >
                  <span className="hover-anim">Whatsapp</span>
                </a>
              </li>
              <li className="mr-30">
                <a
                  href="https://www.linkedin.com/in/hamzahamani/"
                  target="_blank"
                  className="hover-this"
                >
                  <span className="hover-anim">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 valign">
          <div className="full-width wow fadeIn">
            <form onSubmit={onSubmit}>
              <div className="messages"></div>

              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="col-12 mb-12">
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>
                  {result == "done" ? (
                    <span
                      style={{
                        fontSize: "19px",
                        letterSpacing: "1px",
                        fontWeight: "300",
                        borderRadius: "100px",
                        marginTop: "5px",
                        color: "#1df352",
                        fontFamily: "Poppins",
                      }}
                    >
                      Form Submitted Successfully
                    </span>
                  ) : (
                    ""
                  )}{" "}
                  {result == "error" ? (
                    <span
                      style={{
                        fontSize: "19px",
                        letterSpacing: "1px",
                        fontWeight: "300",
                        borderRadius: "100px",
                        marginTop: "5px",
                        color: "#f31a1d",
                        fontFamily: "Poppins",
                      }}
                    >
                      We couldnt recieve your message, try again
                    </span>
                  ) : (
                    ""
                  )}{" "}
                  <div className="mt-30">
                    <button type="submit">
                      <span className="text">Send A Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
