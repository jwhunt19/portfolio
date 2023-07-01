import Layout from "../../components/layout.js";
import styles from "./blog.module.css";

export default function Projects() {
  return (
    <Layout>
      <div className="projectContainer container">
        <h1 className={styles.projectTitle}>Projects</h1>
        <div className={styles.projectContents}>
          <h2>Table of Contents</h2>
          <ul>
            <li>
              <a href="#githubrf">Github Repo Finder</a>
            </li>
            <li>
              <a href="#section2">Section 2</a>
            </li>
          </ul>
        </div>

        {/* 
          
              GITHUB REPO FINDER
          
          
          */}
        <hr style={{ width: '75%', margin: '40px' }} />
        <div id="githubrf" className={styles.project}>
          <h2>Github Repo Finder</h2>
          <b>Objective</b>
          <p>
            Build a repository search application using the Github repository
            search API that displays the results of a query. The app should be
            able to sort by GitHub's default sort key and number of stars, and
            also filter by language. Clicking on a result should show a detailed
            screen with information about the repository.
          </p>
          <b>Requirements</b>
          <ul>
            <li>Search Input: An input field to search GitHub.</li>
            <li>Search Results: Display the results of the search.</li>
            <li>
              Sort Results: Ability to sort by best match (default) or number of
              stars.
            </li>
            <li>Filter Results: Ability to filter by language.</li>
            <li>
              Detailed Result Page: Show a detailed screen when a result is
              clicked.
            </li>
            <li>Responsive Design: The app should be fully responsive.</li>
          </ul>
          <b>Implementation</b>
          <ul>
            <li>The application should be built using React.</li>
            <li>
              The application should have at least two pages: Search page and
              Details page.
            </li>
            <li>
              The application should be responsive and render properly on
              different device sizes.
            </li>
            <li>Code should be written in JavaScript or TypeScript.</li>
          </ul>
          <b>Evaluation</b>
          <ul>
            <li>Was the code able to be built and run locally?</li>
            <li>
              Code Quality: Is the code clean, simple, commented, modern, and
              well-designed?
            </li>
            <li>
              User Experience: How simple, intuitive, responsive, and clear is
              the UI?
            </li>
            <li>
              Error Handling: Does the code handle potential errors gracefully?
            </li>
            <li>
              Clarity: Does the repository have a detailed readme on setup, run,
              and tests?
            </li>
          </ul>
          <b>Submission</b>
          <p>Host the source code in a public GitHub repository.</p>
          <b>Bonus</b>
          <p>
            Include tests that demonstrate the code works correctly and handles
            potential edge cases.
          </p>
        </div>
        <hr style={{ width: '75%', margin: '40px' }} />
      </div>
    </Layout>
  );
}
