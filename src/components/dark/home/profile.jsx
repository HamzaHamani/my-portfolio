import React from "react";

function Profile() {
  return (
    <section className="intro-profile md-mb50 ">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src="/assets/imgs/header/profile.webp" alt="my picture" />
                <span className="icon">
                  <img
                    src="/assets/imgs/header/icon1.svg"
                    alt="postman svg icon"
                  />
                </span>
                <span className="icon">
                  <img
                    src="/assets/imgs/header/icon2.svg"
                    alt="react svg icon"
                  />
                </span>
                <span className="icon">
                  <img
                    src="/assets/imgs/header/icon4.svg"
                    alt="next js svg icon"
                  />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>Hamza Hamani</h5>
                <p className="fz-13 text-u">Available For Work</p>
              </div>
              <div className="social text-center mt-20">
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
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1 className="">
            Hello, I’m <span className="main-color">Hamza Hamani</span>, Full
            Stack Developer and Based in Kenitra.
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>3</h2>
                  <p>
                    Years <br /> of Experance
                  </p>
                </div>
              </div>

              <div>
                <div className="butn-presv">
                  <a
                    href="#"
                    className="butn butn-md butn-bord radius-5 skew"
                    data-scroll-nav="5"
                  >
                    <span>CONTACT ME</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
