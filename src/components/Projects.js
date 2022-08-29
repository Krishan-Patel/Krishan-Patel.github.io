import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        var tech = projects.technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                  <i className={icons.class} style={{ fontSize: "300%", color: "#26408B" }}>
                    <p className="text-center" style={{ fontSize: "35%" }}>
                      {icons.name}
                    </p>
                  </i>
              </span>
            </li>
          );
        });
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto">
                <div style={{minWidth: '80%'}} onClick={() => detailsModalShow(projects)}>
                  <img
                    src={projects.images[0].src}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3 font-weight-bold">
                    {projects.title}
                  </p> 
                  <ul className="list-inline mx-auto">{tech}</ul>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio" style={{backgroundColor: "#A6CFD5"}}>
        <div className="col-md-12">
          <h1 className="section-title" style={{color: "black", font: "40px/48px 'opensans-bold', sans-serif"}}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
