import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  //Insert router, links here
  <Router>
      <Routes>
        <Route path="/">
          <Route path="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" />        </Route>
      </Routes>
    </Router>
}

function Child() {

  // Below this comment, there's one major key script missing
  

  return (
    <div>
      <h3>You Selected:<span>111</span></h3>
    </div>
  );
}
