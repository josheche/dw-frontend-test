import React from "react";
import { Router, Route, Link } from "react-router-dom";

import { history } from "@/_helpers";
import { HomePage } from "@/HomePage";
import { SigninPage } from "@/SigninPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/signin" className="nav-item nav-link">
                Sign In
              </Link>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <Route exact path="/" component={HomePage} />
                <Route path="/signin" component={SigninPage} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export { App };
