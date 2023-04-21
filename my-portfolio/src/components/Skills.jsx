import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import kubernetes from "../assets/img/image 27.png";
import node from "../assets/img/image 26.png";
import react from "../assets/img/image 25.png";
import go from "../assets/img/image 28.png";
import next from "../assets/img/image 29.png";
import javascript from "../assets/img/image 30.png";
import figma from "../assets/img/image 31.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>
                Experiencia en desarrollo de Backend, bajo arquitecturas basadas en la nube como SaaS, Microservicios y Serverless<br></br>  Aquí hay algunas herramientas que uso en mis trabajos
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={figma} alt="web" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="web" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="brand" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={next} alt="brand" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={go} alt="logo" />
                  <h5>Golang Go</h5>
                </div>
                <div className="item">
                  <img src={node} alt="logo" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img
                    src="https://hotmart.s3.amazonaws.com/product_pictures/6fe2df11-fe4f-44e6-9b9e-558808b17b9e/Java.png"
                    alt="web"
                  />
                  <h5>Java & Spring</h5>
                </div>
                <div className="item">
                  <img
                    src="https://yt3.googleusercontent.com/GsP5Yvc5jOSop4SJf_75wdOYaEbO-7ZyYhnARodAGRnEMh-OQjGPGzUz2ZtzsHPtqFyHGvmbEtI=s900-c-k-c0x00ffffff-no-rj"
                    alt="web"
                  />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={kubernetes} alt="web" />
                  <h5>Kubernetes</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};

export default Skills;
