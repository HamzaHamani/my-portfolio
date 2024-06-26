import React from "react";

const data = [
  {
    id: 1,
    photo: "https://utfs.io/f/c7eeb868-3701-446b-9a38-983668078f91-f5ovxs.png",
    secondPhoto:
      "https://utfs.io/f/ba2fdd15-ba34-42d2-b472-5dc168991014-xkhnei.png",
    thirdPhoto:
      "https://utfs.io/f/1dba48c3-beb3-4511-a7db-fcf203968a26-xkhnej.png",
    title: "Bookease",
    link: "/works/Bookease",
    category: "Full Stack Development",
    website: "https://bookeease.netlify.app",
    github: "https://github.com/HamzaHamani/BookEase",
    description:
      "Book Ease is an admin dashboard designed for efficient management of booking data and statistical analysis through clean and intuitive charts. Built using React, React Query, Toasts, Recharts, and Styled Components, this dashboard provides a seamless experience for employees to monitor various stats and handle bookings effortlessly.",
    tech: [
      "React",
      "Supabase",
      "React Query",
      "Toasts",
      "Recharts",
      "Styled Components",
    ],
    disclaimer: true,
  },

  {
    id: 2,
    photo: "https://utfs.io/f/1495f92d-adc0-4108-b301-952f81d74b20-mug54n.png",
    secondPhoto:
      "https://utfs.io/f/8880bb63-8b28-48b4-8c1a-3a9dbe4599c7-2384py.png",
    thirdPhoto:
      "https://utfs.io/f/7ea611ef-059c-42f5-9fae-0323a22b61f7-2384px.png",
    title: "Omnifood",
    link: "/works/Omnifood",
    category: "Front-End Development",
    website: "https://omnifood-hamza.netlify.app",
    github: "https://github.com/HamzaHamani/omnifood",

    description:
      "OmniFood holds a special place in my heart as it marks the beginning of my journey into web development. Crafted using HTML, CSS, and JavaScript, OmniFood represents my first foray into creating dynamic websites. Despite its imperfections, OmniFood embodies my passion for coding and my commitment to learning and improvement. With its sleek design and interactive features, OmniFood offers users a glimpse into the world of online food delivery. Join me on this journey and experience the magic of my first website creation with OmniFood.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    photo: "https://utfs.io/f/b5392e71-38c7-4da6-a724-e1dc5a6e9245-meuv3o.png",
    secondPhoto:
      "https://utfs.io/f/cd0df4a1-ef2a-41e0-969d-9b20657146e6-fijrk3.png",
    thirdPhoto:
      "https://utfs.io/f/10569b8a-a7c5-4c02-9fec-fa7ceb17ea5c-fijrk2.png",
    title: "PizzaPortal",
    link: "/works/PizzaPortal",
    category: "Full Stack Development",
    website: "https://pizzaportal.netlify.app",
    github: "https://github.com/HamzaHamani/PizzaPortal.",

    description:
      "PizzaPortal is a web application that allows users to order pizza online. The project is built using React, React Router v6.4, Tailwind CSS for styling, Local Storage for user login, Redux Toolkit for state management, and Framer Motion for small animations.",
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Local Storage",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },

  {
    id: 4,
    photo: "https://utfs.io/f/18f4c948-98f9-48cb-982d-4b3b0ac61a9d-veedyq.png",
    secondPhoto:
      "https://utfs.io/f/bdf3afa8-c18b-46a8-a415-060a55207262-l16qpt.png",
    thirdPhoto:
      "https://utfs.io/f/fbcdb475-5607-45c4-9acc-d84e16f8e487-l16qps.png",
    title: "mdluxtravel",
    link: "/works/mdluxtravel",
    category: "Front-End Development",
    website: "https://mdluxtravel.com",
    github: "https://github.com/HamzaHamani/MDluxtravel",

    description:
      "Mudlux Travel is a website I developed using HTML, CSS, and JavaScript. From concept to implementation, I crafted an immersive online platform for travel enthusiasts to explore destinations, plan trips, and embark on unforgettable adventures. With a responsive design and intuitive user interface, Mudlux Travel offers a seamless browsing experience for users across all devices. Dive into the world of travel and discover new horizons with Mudlux Travel.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    photo: "https://utfs.io/f/f683d769-3a47-4e4f-8ddd-c8db55a83a60-1zys5.png",
    secondPhoto:
      "https://utfs.io/f/984ac3b4-deff-4e13-988b-a7bb2bdec3b2-1pyy9o.png",
    thirdPhoto:
      "https://utfs.io/f/2d0f4cc2-f347-4f34-84ab-ec9c3c34384e-1pyy9p.png",
    title: "Movi",
    link: "/works/Movi",
    category: "Front-End Development - Api Integration`",
    website: "https://hamzahamani.github.io/MOVI",
    github: "https://github.com/HamzaHamani/MOVI",
    description:
      "This project is a dynamic and interactive movie catalog website built using React, integrating the OMDB API. Users can easily search for movies using a search bar and retrieve detailed information about the movie they're interested in. Additionally, users have the ability to rate movies and mark them as already watched, providing a personalized experience for managing their movie preferences..",
    tech: ["React", "OMDB API", "CSS", "Framer Motion"],
  },
  {
    id: 6,
    photo: "https://utfs.io/f/1c92e0d8-da12-4cf9-a104-a081d0758292-jcp9ac.png",
    secondPhoto:
      "https://utfs.io/f/c7901a38-3fe4-478c-989f-5b7b6ed56430-jcp9aa.png",
    thirdPhoto:
      "https://utfs.io/f/d308e632-4079-43ba-a871-188b3e91a559-jcp9ab.png",
    title: "CoffeeStreet",
    link: "/works/CoffeeStreet",
    category: "Front-End Development",
    website: "https://coffee-street.netlify.app/",
    github: "https://github.com/HamzaHamani/coffe-street",
    description:
      "Welcome to Coffee Street, the online hub for everything coffee-related! Our website is meticulously designed to reflect the essence of our company and to provide an immersive experience for coffee enthusiasts worldwide.",
    tech: ["HTML", "JavaScript", "CSS"],
  },
];

async function ProjectView({ params }) {
  function removeProtocol(url) {
    // Remove "https://", "http://", and "//" from the URL
    return url.replace(/^(https?:\/\/)?(www\.)?/, "");
  }

  const filtered = data.filter((item) => {
    return item.title === params.project;
  });

  return (
    <section className="sec-box project section-padding radius-15">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="img mb-80">
            <img
              src={filtered[0].photo}
              alt="Porject Img Preview"
              className="radius-5"
            />
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
                                fillRule="evenodd"
                                clipRule="evenodd"
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
                  <img
                    src={filtered[0].secondPhoto}
                    alt="Second Image Project Preview"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="img">
                  <img
                    src={filtered[0].thirdPhoto}
                    alt="Third Image Project Preview"
                  />
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
