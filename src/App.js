import React from "react";
import { BrowserRouter as Router, Route, State, Link } from "react-router-dom";
import Footer from "./Footer";

// How to use onClick event on Link: ReactJS?
// https://stackoverflow.com/questions/48294737/how-to-use-onclick-event-on-link-reactjs?rq=1

<Link to="/topics" onClick={() => props.selectTopic(topic)}>
  {topic}{" "}
</Link>;

this.state = {
  selectedTopic: "Rendering with React"
};

selectedTopic = (topic) => {
  this.setState({ selectedTopic: topic }, () => {
    this.props.history.push("Topics");
  });
};

<Footer />;
