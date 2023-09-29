import "../stylings/Resume.css";
import { FaCode, FaGraduationCap, FaLanguage } from 'react-icons/fa'; 

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="skills">
        <h1><FaCode/> &nbsp;Programming skills</h1>
        <div className="skill">
          <p>HTML</p>
          <div className="proficiency-square proficiency-90">90%</div>
        </div>
        <div className="skill">
          <p>CSS</p>
          <div className="proficiency-square proficiency-90">90%</div>
        </div>
        <div className="skill">
          <p>JavaScript</p>
          <div className="proficiency-square proficiency-70">70%</div>
        </div>
        <div className="skill">
          <p>React</p>
          <div className="proficiency-square proficiency-90">90%</div>
        </div>
        <div className="skill">
          <p>Media Query</p>
          <div className="proficiency-square proficiency-90">90%</div>
        </div>
        <div className="skill">
          <p>PHP</p>
          <div className="proficiency-square proficiency-30">30%</div>
        </div>
      </div>
      <div className="education">
        <h1><FaGraduationCap/>&nbsp;Educational qualifications</h1>
        <div className="timeline">
          <div className="event">
            <div className="date">2019:</div>
            <div className="info">
              <p>Bachelor in English Teaching</p>
              <p>University of El Salvador</p>
            </div>
          </div>
          <div className="event">
            <div className="date">2022:</div>
            <div className="info">
              <p>HTML5 and CSS3 training</p>
              <p>VDAB</p>
            </div>
          </div>
          <div className="event">
            <div className="date">2022:</div>
            <div className="info">
              <p>JavaScript training</p>
              <p>VDAB</p>
            </div>
          </div>
          <div className="event">
            <div className="date">2022:</div>
            <div className="info">
              <p>Junior Web Developer</p>
              <p>Hack Your Future Belgium</p>
            </div>
          </div>
          <div className="event">
            <div className="date">2023:</div>
            <div className="info">
              <p>Front-End Web Developer</p>
              <p>Bruxell Formation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="languages">
        <h1><FaLanguage/>&nbsp;Spoken languages</h1>
        <div className="language">
          <p>Spanish</p>
          <div className="proficiency-square proficiency-native">Native</div>
        </div>
        <div className="language">
          <p>English</p>
          <div className="proficiency-square proficiency-advanced">Advanced</div>
        </div>
        <div className="language">
          <p>Dutch</p>
          <div className="proficiency-square proficiency-intermediate">Intermediate</div>
        </div>
        <div className="language">
          <p>French</p>
          <div className="proficiency-square proficiency-basic">Basic</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
