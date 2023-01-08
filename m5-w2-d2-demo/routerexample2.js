import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  userRouteMatch,
  userParams,
} from "react-router-dom";

export default function App() {
  return (
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

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



// add topic function
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}


function Home() {
  return <h2>Home</h2>
}


function About() {
  return <h2>About</h2>
}


function Topics() {
  let match = userRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/cats`}>Cats</Link>
        </li>
        <li>
          <Link to={`${match.url}/dogs`}>Dogs</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topics />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}