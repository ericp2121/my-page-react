import './App.css';
import profilePic from './assets/profile_pic.jpg';

function App() {
  return (
    <div className="App">
      <h2>Eric Peng - BASc Computer Engineering, Full-Stack & QA Developer</h2>

      <img
        className="pfp"
        src={profilePic}
        alt="Eric Peng profile"
      />

      <p className="intro">
        Hey there! I’m Eric, a graduating Computer Engineering student at the University of Ottawa.
      </p>

      {/* Flex container for Work Experience + Projects */}
      <div className="content-sections">

        {/* Work Experience Section */}
        <div className="section">
          <h2>Work Experience</h2>
          <div className="work-experience">

            <div className="job">
              <h3>QA Automation Developer - Ciena</h3>
              <p className="dates">May 2025 - Dec 2025 | Ottawa, ON</p>
              <p>Developed web automation scripts and test cases using <strong>TypeScript</strong>, <strong>Playwright</strong>, and <strong>TeamCity</strong>.</p>
              <p>Designed and executed comprehensive <strong>Postman</strong> test suites to validate REST API endpoints, integrated with TeamCity.</p>
              <p>Executed prompt engineering tests on Ciena’s proprietary AI systems to optimize model behavior and output precision.</p>
            </div>

            <div className="job">
              <h3>Full-Stack Developer (Automation Tools & Standards) - Ericsson</h3>
              <p className="dates">Sep 2024 - Apr 2025 | Ottawa, ON</p>
              <p>Developed and maintained web platforms using <strong>Python</strong>, <strong>Django</strong>, <strong>Selenium</strong>, <strong>Beautiful Soup</strong>, and <strong>SQLite</strong> to track telecommunications regulations.</p>
              <p>Integrated AI-driven optimization strategies into web scrapers using <strong>GPT-4o</strong>.</p>
              <p>Built secure login systems using JavaScript and the <strong>Python Cryptography</strong> library.</p>
              <p>Maintained and upgraded <strong>Windows</strong> and <strong>Linux</strong> servers, reducing server latency and improving reliability.</p>
              <p>Wrote extensive technical documentation in <strong>SharePoint</strong> and <strong>Confluence</strong>.</p>
            </div>

            <div className="job">
              <h3>Web Development Student - University of Ottawa</h3>
              <p className="dates">May 2024 - Aug 2024 | Ottawa, ON</p>
              <p>Designed and developed a professional website using <strong>React</strong>.</p>
            </div>

            <div className="job">
              <h3>Automation Developer - Global Affairs Canada</h3>
              <p className="dates">Sep 2023 - Dec 2023 | Gatineau, QC</p>
              <p>Migrated <strong>Java</strong> test cases to <strong>Nightwatch.js</strong> for the NEICS project and verified <strong>SQL</strong> database integrity.</p>
            </div>

            <div className="job">
              <h3>Software Developer - Employment and Social Development Canada (ESDC)</h3>
              <p className="dates">May 2022 - Aug 2022 | Gatineau, QC</p>
              <p>Created <strong>JUnit</strong> test cases using <strong>Mockito</strong> and optimized Spring Boot web integration tests.</p>
            </div>

          </div>
        </div>

        {/* Projects Section */}
        <div className="section">
          <h2>Projects</h2>
          <div className="projects">

            <div className="project">
              <h3>Engineering Capstone - Autonomous Snowplow Robot</h3>
              <p>Designed an AI model using <strong>Python</strong> and <strong>OpenCV</strong> to detect snowfall for rover guidance.</p>
              <p>Developed autonomous object-avoidance systems using <strong>Python</strong>.</p>
              <p>Built a UI-controlled platform using <strong>React</strong> and <strong>Python</strong>, integrating real-time weather APIs.</p>
            </div>

            <div className="project">
              <h3>Rate My Co-op Website</h3>
              <p>Developed an internship review platform with a <strong>React</strong> & <strong>Material-UI</strong> frontend and a <strong>Java Spring Boot</strong> backend hosted on <strong>Microsoft Azure</strong>.</p>
            </div>

            <div className="project">
              <h3>Android Car Rental App</h3>
              <p>Developed a <strong>Java-based</strong> Android app with a <strong>Firebase</strong> backend.</p>
            </div>

          </div>

          <div className="contact-info">
            <h2>Academic Involvement</h2>

            <div className="project">
              <h3>English Debate Society</h3>
              <p>Organized and ran high school debate tournaments for 100+ participants.</p>
              <p>Utilized open-source debate tabbing software, TabbyCat, for university-level tournaments.</p>
              <p>Selected to represent the University of Ottawa at the World University Debating Championships in Bulgaria, 2026.</p>
            </div>

            <div className="project">
              <h3>Engineering Student Society</h3>
              <p>Organized and ran multiple educational and recreational events for newly enrolled students.</p>
              <p>Provided academic and lifestyle guidance to new students.</p>
            </div>

          </div>


          <div className="contact-info">
            <h2>Contact Info</h2>

            <div className="contact-item">
              <h3>Email:</h3>
              <a href="mailto:ericpeng21@gmail.com">ericpeng21@gmail.com</a>
            </div>

            <div className="contact-item">
              <h3>LinkedIn:</h3>
              <a
                href="https://www.linkedin.com/in/eric-peng-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/eric-peng-/
              </a>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
