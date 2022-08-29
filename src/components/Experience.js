import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i} >
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i} ref={(el) => el && el.style.setProperty("backgroundColor", "#26408B", "important")}>
              {technology}
            </Badge>
          );
        });
        return ( 
            <VerticalTimelineElement
              //date={work.years}
              className="vertical-timeline-element--work"
              iconStyle={{
                background: "#26408B",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className={work.icon}></i>}
              key={i}
            >
              <div style={{ textAlign: "left", marginBottom: "4px" }}>
                {mainTech}
              </div>

              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                {work.title}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                {work.company}
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                {work.years}
              </h5>
              <p
                style={{ textAlign: "left", fontSize: '1.25rem' }}
              >
                {work.description}
              </p>
              <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            </VerticalTimelineElement>          
        );
      });
    }
    let releventCourses = ["Designing Functional Programs", "Elementary Algorithm Design and Data Abstraction", "Object-Oriented Software Development", "Data Structures and Data Management", "Foundations of Sequential Programs", "Computer Organization and Design"];
    let coursesBadge = releventCourses.map((technology, i) => { 
      return (
        <Badge pill className="experience-badge mr-2 mb-2" key={i} ref={(el) => el && el.style.setProperty("backgroundColor", "#26408B", "important")}>
          {technology}
        </Badge>
      );
    })
    return (
      <section id="resume" className="pb-5" style={{backgroundColor: "#A6CFD5"}}>
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black", font: "40px/48px 'opensans-bold', sans-serif" }}>
              <span>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-12 mx-auto">
           
          <VerticalTimeline className="mw-100">
            {work}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{
                background: "#26408B",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                Honours Bachelor of Computer Science
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                University of Waterloo
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                GPA: 3.99 CAV: 94.9
              </h5>
              <h4
                className="vertical-timeline-element-subtitle mt-2"
                style={{ textAlign: "left" }}
              >
                Relevent Courses:
              </h4>
              {coursesBadge}
            </VerticalTimelineElement>  
            <VerticalTimelineElement
              iconStyle={{
                background: "#26408B",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
                   
        </div>  
      </section>
    );
  }
}

export default Experience;
