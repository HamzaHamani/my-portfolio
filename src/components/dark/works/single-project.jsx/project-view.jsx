import React from "react";
import { promises as fs } from "fs";

async function ProjectView({ params }) {
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
                <h1 className="mb-15 fw-500  text-xl">{filtered[0].title}</h1>
                <p>{filtered[0].description}</p>

                <div className="mt-30">
                  <h3 className="mb-15 line-height-28 text">
                    Tools & Technologies
                  </h3>

                  <ul className="rest list-arrow mt-50">
                    <li>
                      <span className="icon">
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
                      <h6 className="inline fz-18">Amazing communication.</h6>
                    </li>
                    <li className="mt-20">
                      <span className="icon">
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
                      <h6 className="inline fz-18">
                        Best trendinf designing experience.
                      </h6>
                    </li>
                    <li className="mt-20">
                      <span className="icon">
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
                      <h6 className="inline fz-18">Email &amp; Live chat.</h6>
                    </li>
                    <li className="mt-20">
                      <span className="icon">
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
                      <h6 className="inline fz-18">Amazing communication.</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info sub-bg" id="sticky_item">
                <ul>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="fas fa-list-ul mr-10"></i> Categories :
                    </span>
                    <p>{filtered[0].category}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="far fa-user mr-10"></i> Github :
                    </span>
                    <p>
                      <a href={filtered[0].github} target="_blank">
                        Project Repo
                      </a>
                    </p>
                  </li>
                  <li>
                    <span className="sub-title">
                      <i className="fas fa-globe mr-10"></i> Website :
                    </span>
                    <p>
                      <a href={filtered[0].website} target="_blank">
                        {filtered[0].website}
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
                  <img src="/assets/imgs/works/project/2.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="img">
                  <img src="/assets/imgs/works/project/3.png" alt="" />
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
