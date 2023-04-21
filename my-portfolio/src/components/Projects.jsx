import React from "react";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./cards";
import colorSharp from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg1,
    },
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg2,
    },
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg3,
    },
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg1,
    },
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg2,
    },
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg3,
    },
  ];
  const works = [
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg2,
    },
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg2,
    },
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg2,
    },
  ];
  const education = [
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg3,
    },
    {
      title: "Binnarium",
      description: "CEO",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Experiencia</h2>
            <p>
            Soy una persona que valora el aprendizaje constante y me entusiasma buscar nuevos proyectos que me permitan ayudar a los clientes y enfrentar nuevos retos.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Proyectos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Trabajos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Educación</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {works.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {education.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt=""></img>
    </section>
  );
};

export default Projects;
