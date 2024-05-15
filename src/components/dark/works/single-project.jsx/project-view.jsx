import React from "react";
import { promises as fs } from "fs";

async function ProjectView({ params }) {
  function removeProtocol(url) {
    // Remove "https://", "http://", and "//" from the URL
    return url.replace(/^(https?:\/\/)?(www\.)?/, "");
  }
  const file = await fs.readFile(
    process.cwd() + "/src/data/home/works.json",
    "utf8"
  );
  const data = JSON.parse(file);

  const filtered = data.filter((item) => {
    return item.title === params.project;
  });
  return (
    <section className="sec-box project section-padding radius-15">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="img mb-80">
            <img src={filtered[0].photo} alt="" className="radius-5" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="cont md-mb50">
                <h1
                  className="mb-15 fw-500  text-xl"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  {filtered[0].title}
                </h1>
                {filtered[0].disclaimer ? (
                  <h3
                    style={{
                      color: "#d43f3f",
                      fontSize: "20px",
                      marginTop: "-5px",
                      marginBottom: "10px",
                    }}
                  >
                    PC only admin dashboard
                  </h3>
                ) : (
                  ""
                )}
                <p style={{ color: "#c7c5c5" }}>{filtered[0].description}</p>

                <div className="mt-30">
                  <h3
                    className=" line-height-28"
                    style={{ marginTop: "80px", fontSize: "2rem" }}
                  >
                    Tools & Technologies :
                  </h3>

                  <ul className="rest list-arrow mt-50">
                    {filtered[0].tech.map((item) => {
                      return (
                        <li key={item}>
                          <span
                            className="icon"
                            style={{ marginBottom: "10px" }}
                          >
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </span>
                          <h6
                            className="inline fz-18"
                            style={{ color: "#c7c5c5" }}
                          >
                            {item}
                          </h6>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info sub-bg" id="sticky_item">
                <ul>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="fas fa-list-ul mr-5"></i> Categories :
                    </span>
                    <p>{filtered[0].category}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i class="fas fa-file-code mr-10"></i>Source Code :
                    </span>
                    <p>
                      <a href={filtered[0].github} target="_blank">
                        Github
                      </a>
                    </p>
                  </li>
                  <li>
                    <span className="sub-title">
                      <i className="fas fa-globe "></i> Website :
                    </span>
                    <p>
                      <a href={filtered[0].website} target="_blank">
                        {removeProtocol(filtered[0].website)}
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="imgs mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              <div className="col-md-6">
                <div className="img sm-mb30">
                  <img src={filtered[0].secondPhoto} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="img">
                  <img src={filtered[0].thirdPhoto} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-prev">
        <div className="row justify-content-center">
          <div className="col-lg-11"></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectView;
