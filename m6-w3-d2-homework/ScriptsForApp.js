import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  //Insert router, links here
}

function Child() {

  // Below this comment, there's one major key script missing
  

  return (
    <div>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}
