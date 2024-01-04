import React, { useState } from "react";

import Layout from "../../src/components/layout.js";
import styles from "./blog.module.css";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  return (
    <Layout>
      <div className="projectContainer container">
        <h1 className={styles.projectTitle}>Projects</h1>
        <div className={styles.projectContents}>
          <h2>Table of Contents</h2>
          <ul>
            <li>
              <a href="#githubrf">Github Repo Finder</a> (JavaScript, React,
              API)
            </li>
            <li>
              <a href="#urlshortener">URL Shortener</a> (React, GraphQL, Apollo)
            </li>
            <li>
              <a href="#datalists">Displaying Data in Lists</a> (JavaScript,
              React, API)
            </li>
          </ul>
          <ul>
            <p>Bonus Interview Challenges</p>
            <li>
              <a href="#interview1">Interview Challenge 1 - Color Blocks</a>
            </li>
            <li>
              <a href="#interview2">
                Interview Challenge 2 - Pyramid Descent Puzzle
              </a>
            </li>
          </ul>
        </div>

        {/* 
          

              GITHUB REPO FINDER
          
          
        */}
        <hr style={{ width: "75%", margin: "40px" }} />
        <div id="githubrf" className={styles.project}>
          <h2>Github Repo Finder</h2>
          <h3>Objective:</h3>
          <p>
            Build a repository search application using the Github repository
            search API that displays the results of a query. The app should be
            able to sort by GitHub's default sort key and number of stars, and
            also filter by language. Clicking on a result should show a detailed
            screen with information about the repository.
          </p>
          <h3>Requirements:</h3>
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
          <h3>Implementation:</h3>
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
          <h3>Evaluation:</h3>
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
          <h3>Bonus:</h3>
          <p>
            Include tests that demonstrate the code works correctly and handles
            potential edge cases.
          </p>
        </div>
        <hr style={{ width: "75%", margin: "40px" }} />
      </div>
      {/* 
          

              URL SHORTENER
          
          
      */}
      <div id="urlshortener" className={styles.project}>
        <h2>URL Shortener</h2>
        <h3>Objective:</h3>
        <p>
          The objective of this project is to create a link shortener
          application using a full-stack React web application with a GraphQL
          backend. The application should allow users to write data through a
          form, display the newly shortened links in a list, and have an
          attractive mobile-first responsive landing page.
        </p>

        <h3>Requirements:</h3>
        <ul>
          <li>
            <strong>Backend Setup:</strong> Use Apollo Server to set up the
            GraphQL backend. Create a Link model with two fields:
            <code>url</code> and <code>slug</code>. Migrate the database and
            ensure the backend serves the Link resource to the frontend.
          </li>
          <li>
            <strong>Frontend Setup:</strong> Use Create React App with Apollo
            Client to set up the frontend. Connect the client to the Apollo
            Provider and initialize the client.
          </li>
          <li>
            <strong>Styling:</strong> Use Tailwind CSS, MUI, or a tool of your
            choice to create a mobile-first responsive design for the
            application.
          </li>
          <li>
            <strong>UI Features:</strong> Implement the following UI features:
            <ul>
              <li>
                Use a container div to specify a max-width for the desktop web
                view.
              </li>
              <li>
                Allow users to copy shortened links to their clipboard by
                clicking a copy button.
              </li>
              <li>Display the list of shortened links below the form.</li>
            </ul>
          </li>
        </ul>

        <h3>Implementation:</h3>
        <ul>
          <li>
            Create a Schema and Resolvers in the backend to handle GraphQL
            queries and mutations for the Link resource.
          </li>
          <li>
            Implement the form to submit URLs and generate a unique slug for
            each submitted URL. Save the URL and slug in the database.
          </li>
          <li>
            Allow users to specify a custom slug to override the generated slug,
            ensuring uniqueness.
          </li>
          <li>
            Handle back-end checks for slug uniqueness and display errors on the
            form if necessary.
          </li>
        </ul>

        <h3>Evaluation:</h3>
        <ul>
          <li>
            Effective use of modern features like hooks and composition of
            reusable parts.
          </li>
          <li>Use of a grid system and mobile-first responsive design.</li>
          <li>
            UI design similar in form and function to Rebrandly's landing page.
          </li>
        </ul>

        <h3>Bonus:</h3>
        <ul>
          <li>User accounts to store links uniquely filtered to each user.</li>
          <li>
            Security restrictions preventing users from accessing or editing
            another user's data.
          </li>
          <li>Working redirect when clicking on a shortened URL.</li>
          <li>Tests for the back-end code that generates the unique slug.</li>
        </ul>
      </div>
      <hr style={{ width: "75%", margin: "40px" }} />
      {/* 
          

              Data in Lists
          
          
      */}

      <div id="datalists" className={styles.project}>
        <h2>Displaying Data in Lists</h2>

        <h3>Objective:</h3>
        <p>
          In this project we will build a React application that displays data
          from a JSON file in separate lists based on the <code>listId</code>{" "}
          property. We will also filter out empty string or null names and sort
          each list by the <code>id</code> in ascending order. Additionally,
          we'll include a bonus feature to enhance the user experience.
        </p>
        <p>
          Here is the JSON data we will be working with:{" "}
          <a href="/datalist.json" target="_blank">
            {"datalist.json"}
          </a>
          <br />
          Please download the JSON file and save it in your project directory.
        </p>

        <h3>Requirements:</h3>
        <p>
          To complete this challenge, we need to meet the following
          requirements:
        </p>
        <ul>
          <li>
            Display the JSON data in four separate lists based on the{" "}
            <code>listId</code> property.
          </li>
          <li>
            Filter out any objects with an empty string or null value for the{" "}
            <code>name</code> property.
          </li>
          <li>
            Sort each list by the <code>id</code> property in ascending order.
          </li>
          <li>
            Use React components and state to manage the data and rendering.
          </li>
        </ul>

        <h3>Implementation:</h3>
        <p>Let's break down the implementation into smaller steps:</p>

        <i>
          <p>1. Setting up the React App</p>
        </i>
        <p>
          Start by creating a new React project using Create React App or your
          preferred setup. Install any additional dependencies needed for the
          project, such as <code>axios</code> or <code>node-fetch</code> for
          fetching the JSON data.
        </p>

        <i>
          <p>2. Fetching and Processing the JSON Data</p>
        </i>
        <p>
          Import the JSON data from the provided JSON file into your React
          component using <code>fetch</code> or an appropriate method. Once you
          have the data, filter out any objects with an empty string or null
          value for the <code>name</code> property. Sort the filtered data
          arrays based on the <code>id</code> property in ascending order.
        </p>
        <i>
          <p>3. Rendering the Lists</p>
        </i>
        <p>
          Create a React component that renders the JSON data in four separate
          lists based on the <code>listId</code> property. Map over each
          filtered and sorted data array and render the individual items as list
          elements. Style the lists using CSS or a CSS-in-JS library to enhance
          the visual appearance.
        </p>
        <i>
          <p>4. Implementing the Bonus Feature</p>
        </i>
        <p>
          For the bonus feature, let's add a search functionality that allows
          users to filter the items in each list based on a search query. Create
          an input field in the user interface to accept the search query.
          Implement the logic to filter the items based on the search query in
          real-time as the user types. Update the rendering logic to display
          only the items that match the search query.
        </p>

        <h3>Evaluation:</h3>
        <p>
          To evaluate the success of our project, we can consider the following
          criteria:
        </p>
        <ul>
          <li>
            Correct rendering of four separate lists based on the{" "}
            <code>listId</code> property.
          </li>
          <li>
            Filtering out objects with empty string or null values for the{" "}
            <code>name</code> property.
          </li>
          <li>
            Sorting each list by the <code>id</code> property in ascending
            order.
          </li>
          <li>
            Proper implementation of React components and state management.
          </li>
          <li>
            Bonus: Successful implementation of the search functionality,
            providing real-time filtering of items based on user input.
          </li>
        </ul>

        <h3>Bonus: Enhancing User Experience with Drag and Drop:</h3>
        <p>
          To further enhance the user experience, we can implement a drag and
          drop feature that allows users to reorder items within each list.
          Here's a possible approach:
        </p>
        <ul>
          <li>
            Integrate a library like <code>react-beautiful-dnd</code> to handle
            the drag and drop functionality.
          </li>
          <li>
            Add drag and drop capabilities to the list items, allowing users to
            rearrange the items within each list.
          </li>
          <li>
            Update the state and re-render the lists whenever an item is dragged
            and dropped.
          </li>
          <li>
            Persist the new item order using a server or local storage to
            maintain the changes on page refresh.
          </li>
        </ul>
        <p>
          This bonus feature would provide a more interactive and engaging user
          interface, enabling users to customize the order of items within each
          list according to their preferences.
        </p>
      </div>
      <hr style={{ width: "75%", margin: "40px" }} />
      {/* 
          

              Color Blocks
          
          
      */}
      <div id="interview1" className={styles.project}>
        <h2>Interview Challenge 1 - Color Blocks</h2>
        <p>
          Create a program that assigns colors (red, green, blue, yellow) to
          each subregion in a square, ensuring that no neighboring regions have
          the same color.
        </p>
        <pre>
          <code>
            {`const regions = [
  [a, a, b, b],
  [c, d, d, e],
  [c, f, f, e],
  [c, f, f, f],
]`}
          </code>
        </pre>
      </div>
      <hr style={{ width: "75%", margin: "40px" }} />
      {/* 
          

              Pyramid Descent Puzzle
          
          
      */}
      <div id="interview2" className={styles.project}>
        <h2>Interview Challenge 2 - Pyramid Descent Puzzle</h2>
        <p>
          The Pyramid Descent Puzzle presents a pyramid of positive integers.
          Your challenge is to find a path that traverses the pyramid from top
          to bottom, visiting numbers whose product equals a given target value.
          Each step in the path must move down one row, either to the left or to
          the right.
        </p>
        <p>For example, consider the following pyramid:</p>
        <pre>
          <code>{`  1 
 2 1 
1 3 2`}</code>
        </pre>
        <p>
          If the target value is 2, the correct path would be "LR". Starting
          from the top, you go left to the 2 on the second row, then right to
          the 1 in the center of the bottom row. Note that you cannot go through
          the 1 at the end of the bottom row.
        </p>
        <p>
          Your task is to write a solver in your chosen programming language
          that can solve any pyramid descent puzzle. The solver should be able
          to handle pyramids of varying sizes. Your solution should find the
          correct path that leads to the target value.
        </p>
        <p>
          Now, here's a pyramid with a target value of 1337. Can you solve it?
        </p>

        <pre>
          <code>
            {`             1
           3   7
         5   1   7
      100 191 133 166
`}
          </code>
        </pre>
        <br />
        <p>Here is the input for the pyramid above:</p>
        <pre>
          <code>
            const pyramid = [ [1], [3, 7], [5, 1, 7], [100, 191, 133, 166] ];
            <br />
            <br />
            const target = 1337;
          </code>
        </pre>
        <br />
        <p>
          Answer:{" "}
          <span
            id="pyramid_answer"
            onMouseEnter={handleHover}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.pyramid}
          >
            {isHovered ? 'RLL --- 1 * 7 * 1 * 191 = 1337' : 'Hover to reveal'}
          </span>{" "}
        </p>
      </div>
      <hr style={{ width: "75%", margin: "40px" }} />
    </Layout>
  );
}
