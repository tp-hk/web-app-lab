import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import config from "./config";
import App from "./components/App";
import Create from "./components/Create";
import Show from "./components/Show";

export const path = "notes";

firebase.initializeApp(config);
export default firebase;

ReactDOM.render(
  <FirebaseDatabaseProvider firebase={firebase} {...config}>
    <React.StrictMode>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/create" component={Create} />
          <Route path="/show/:id" component={Show} />
        </div>
      </Router>
    </React.StrictMode>
  </FirebaseDatabaseProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
