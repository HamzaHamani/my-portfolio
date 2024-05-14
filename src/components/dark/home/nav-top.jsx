import React from "react";
import "../../../../public/assets/css/style.css";

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="flexnavtop">
          <div className="leftnav">
            <div id="item1">
              <button
                className=""
                style={{
                  backgroundColor: "#FFFFFF",
                }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=17604579224"
                  className="consbtn"
                  target="_blank"
                >
                  <span
                    className="consultation"
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
              </button>
            </div>
          </div>
          <div id="item2" className="rightnav">
            <a href="mailto:haamzahaamani@gmail.com">
              <span className="sub-title fz-12">haamzahaamani@gmail.com</span>
            </a>
          </div>
        </div>
        {/* <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div> */}
      </div>
    </div>
  );
}

export default NavTop;
