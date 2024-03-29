import React from "react";
import { Router, Route, Link } from "react-router-dom";

import { history } from "@/_helpers";
import { authenticationService } from "@/_services";
import { PrivateRoute } from "@/_components";
import { HomePage } from "@/HomePage";
import { SigninPage } from "@/SigninPage";
import { SignupPage } from "@/SignupPage";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/");
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        {currentUser && (
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/signin" className="nav-item nav-link">
                  Sign-In
                </Link>
                <Link to="/signup" className="nav-item nav-link">
                  Sign-Up
                </Link>
                <a onClick={this.logout} className="nav-item nav-link">
                  Logout
                </a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <PrivateRoute exact path="/" component={HomePage} />
                </div>
              </div>
            </div>
          </div>
        )}
        {!currentUser && (
          <section className="auth-page">
            <Route exact path="/" component={SigninPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
          </section>
        )}
      </Router>
    );
  }
}

export { App };
