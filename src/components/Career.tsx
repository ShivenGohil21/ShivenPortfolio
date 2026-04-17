import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science & Engineering</h4>
                <h5>Marwadi University</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              Completed diploma with a focus on fundamental engineering concepts, 
              programming basics, and technical skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's in Computer Science</h4>
                <h5>PDEU, Gandhinagar</h5>
              </div>
              <h3>2023 - 2026</h3>
            </div>
            <p>
              Studying core computer science subjects including DBMS, OS, Data Structures, 
              and Cloud Computing. Maintaining a strong academic record with a focus on 
              practical application of technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Zidio Development</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Learned to build full-stack web applications using the MERN stack. 
              Gained experience with Git and collaborative team-based workflows. 
              Built an Excel Analytics app with interactive 2D/3D charts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>Akash Technolabs</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Currently building a Product on Rent platform using the MERN stack, 
              focusing on scalable architecture and user-friendly rent management systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
