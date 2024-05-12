import React from "react";

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <div>
              <div
                className=""
                style={{
                  backgroundColor: "#FFFFFF",
                }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=17604579224"
                  className="butn butn-md butn-bord radius-5 skew"
                >
                  <span
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "600",
                      letterSpacing: ".9px",
                      color: "black",
                    }}
                  >
                    free consultation
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 valign">
            {/* <div className="social text-center full-width">
              <a href="https://github.com/HamzaHamani" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hamzahamani/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=17604579224"
                target="_blank"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div> */}
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:haamzahaamani@gmail.com">
                  <span className="sub-title fz-12">
                    haamzahaamani@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
