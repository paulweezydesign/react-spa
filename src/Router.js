/* 
  
  Refactor below code from: 
  https://stackoverflow.com/questions/48294737/how-to-use-onclick-event-on-link-reactjs

  <li key={i} onClick={() => props.selectName(name)}> {name} </li>

selectName = (name) => {
    this.setState({ selectedName:name }, () => {
        this.props.history.push('about');
    });
} */

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Footer from "./Footer";

const Home = () => (
  <div>
    <h2>Home</h2>
    <Footer />
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <Footer />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
    <Footer />
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" render={() => <Redirect to="/topics" />} />
      <Route path="/home" component={Home} />

      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
export default BasicExample;
