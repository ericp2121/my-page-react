import './App.css';
import profilePic from './assets/profile_pic.jpg';

function App() {
  return (
    <div className="App">
      <h2>Eric Peng - BSc Computer Engineering, Full Stack + QA Developer</h2>

      <img
        className="pfp"
        src={profilePic}
        alt="Eric Peng profile"
      />

      <p className="intro">
        Hey there! I am Eric, a graduating computer engineering student at the University of Ottawa.
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
              <p>Developed web automation scripts and test cases using Playwright with <strong>TypeScript</strong> and <strong>TeamCity</strong>, reducing UI and backend error rates on MCP Servers.</p>
              <p>Designed and executed <strong>Postman</strong> test suites using JSON collections and <strong>Makefile</strong> structure to validate REST APIs.</p>
              <p>Analyzed network performance using <strong>Playwright</strong> and <strong>Postman</strong>, implementing optimizations that reduced response times by 5-10%.</p>
            </div>

            <div className="job">
              <h3>Standards & Industry Automation Developer - Ericsson</h3>
              <p className="dates">Sep 2024 - Apr 2025 | Ottawa, ON</p>
              <p>Built automated web scrapers using <strong>Python</strong> (<strong>Django</strong>, <strong>Selenium</strong> and <strong>Beautiful Soup</strong>) and <strong>SQLite</strong> to track telecom regulations.</p>
              <p>Implemented secure login systems with JavaScript and the <strong>Python Cryptography</strong> library.</p>
              <p>Integrated <strong>GPT-4o</strong> for AI-driven scraper optimization, reducing runtime by 25%.</p>
              <p>Maintained and upgraded <strong>Windows Server</strong> 2012 to 2016 and <strong>Linux</strong> servers, reducing server latency and improving infrastructure reliability.</p>
              <p>Wrote extensive technical documentation on <strong>SharePoint</strong> and <strong>Confluence</strong> pages.</p>

            </div>

            <div className="job">
              <h3>Web Maintenance Student - University of Ottawa</h3>
              <p className="dates">May 2024 - Aug 2024 | Ottawa, ON</p>
              <p>Designed and developed a professional website using <strong>WordPress</strong> and <strong>HTML</strong> for Professor Elke Winter.</p>
            </div>

            <div className="job">
              <h3>Automation Developer - Global Affairs Canada</h3>
              <p className="dates">Sep 2023 - Dec 2023 | Gatineau, QC</p>
              <p>Analyzed then migrated <strong>Java</strong>test cases into <strong>Nightwatch.js</strong> for the NEICS project.</p>
              <p>Verified <strong>SQL</strong> database integrity during test implementation.</p>
            </div>

            <div className="job">
              <h3>Software Developer - Employment and Social Development Canada (ESDC)</h3>
              <p className="dates">May 2022 - Aug 2022 | Gatineau, QC</p>
              <p>Created <strong>JUnit</strong> test cases using <strong>Mockito</strong> for integration testing.</p>
              <p>Contributed to backend development with <strong>Spring Boot</strong>.</p>
            </div>

          </div>
        </div>

        {/* Projects Section */}
        <div className="section">
          <h2>Projects</h2>
          <div className="projects">

            <div className="project">
              <h3>Engineering Capstone - Autonomous Snow Plow</h3>
              <p>Designed an AI model in <strong>Python OpenCV</strong> to detect snowfall for rover guidance, with 85% accuracy and 500 ms response time.</p>
              <p>Developed object-avoidance systems in <strong>Python</strong> for autonomous object avoidance during operations.</p>
              <p>Developed web UI controller for manual operations with <strong>React</strong> and <strong>Python</strong>.</p>

            </div>

            <div className="project">
              <h3>Rate my Co-op Website</h3>
              <p>Developed a platform to review internships; with <strong>React</strong> and <strong>Material-UI</strong> front-end, and Java, Spring Boot back-end with <strong>SQL</strong>, hosted on <strong>MS Azure</strong>.</p>
            </div>

            <div className="project">
              <h3>Android Car Rental App</h3>
              <p>Developed a <strong>Java-based</strong> Android car rental app, with <strong>Firebase</strong> backend.</p>
            </div>

          </div>
          {/* Contact Info under Projects (not nested inside .projects div) */}
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
