import './App.css';
import profilePic from './assets/profile_pic.jpg';

function App() {
  return (
    <div className="App">
      <h2>Eric Peng - BSc Computer Engineering, QA/Web Developer</h2>

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
              <h3>QA Automation Developer – Ciena</h3>
              <p className="dates">May 2025 – Dec 2025 | Ottawa, ON</p>
              <p>Developed web automation scripts and test cases using Playwright with TypeScript and TeamCity, reducing UI and backend error rates by 15%.</p>
              <p>Designed and executed Postman test suites using JSON collections and Makefile structure to validate REST APIs.</p>
              <p>Analyzed network performance using Playwright and Postman, implementing optimizations that reduced response times by 5–10%.</p>
            </div>

            <div className="job">
              <h3>Standards & Industry Automation Developer – Ericsson</h3>
              <p className="dates">Sep 2024 – Apr 2025 | Ottawa, ON</p>
              <p>Built automated web scrapers using Python, Django, Selenium, Beautiful Soup, and SQLite to track telecom regulations.</p>
              <p>Implemented secure login systems with JavaScript and the Python Cryptography library.</p>
              <p>Integrated GPT-4o for AI-driven scraper optimization, reducing runtime by 25%.</p>
              <p>Migrated Windows Server 2012 to 2016, improving infrastructure reliability and reducing latency by 40%.</p>
            </div>

            <div className="job">
              <h3>Web Maintenance Student – University of Ottawa</h3>
              <p className="dates">May 2024 – Aug 2024 | Ottawa, ON</p>
              <p>Designed and developed a professional website using WordPress and HTML for Professor Elke Winter.</p>
            </div>

            <div className="job">
              <h3>Automation Developer – Global Affairs Canada</h3>
              <p className="dates">Sep 2023 – Dec 2023 | Gatineau, QC</p>
              <p>Migrated Java test cases into Nightwatch.js for the NEICS project.</p>
              <p>Verified SQL database integrity during test implementation.</p>
            </div>

            <div className="job">
              <h3>Software Developer – Employment and Social Development Canada (ESDC)</h3>
              <p className="dates">May 2022 – Aug 2022 | Gatineau, QC</p>
              <p>Created JUnit test cases using Mockito for integration testing.</p>
              <p>Contributed to backend development with Spring Boot.</p>
            </div>

          </div>
        </div>

        {/* Projects Section */}
        <div className="section">
          <h2>Projects</h2>
          <div className="projects">

            <div className="project">
              <h3>Engineering Capstone - Autonomous Snow Plow</h3>
              <p>Designed an AI model in Python OpenCV to detect snowfall for rover guidance, with 85% accuracy and 500 ms response time.</p>
              <p>Developed object-avoidance systems in Python for autonomous object avoidance during operations.</p>
              <p>Developed web UI controller for manual operations with React and Python.</p>
            </div>

            <div className="project">
              <h3>Rate my Co-op Website</h3>
              <p>Developed a platform to review internships; with React and Material-UI front-end, and Java, Spring Boot back-end with SQL, hosted on MS Azure.</p>
            </div>

            <div className="project">
              <h3>Android Car Rental App</h3>
              <p>Developed a Java-based Android car rental app, with Firebase backend.</p>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
