import React from "react";

import { userService, authenticationService } from "@/_services";

import "./HomePage.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      users: null,
    };
  }

  componentDidMount() {
    userService.getAll().then((users) => this.setState({ users }));
  }

  render() {
    const { currentUser, users } = this.state;
    return (
      <div>
        <div>Protected Home Page</div>
        <h1>
          Welcome {currentUser.firstName} {currentUser.lastName}!
        </h1>
      </div>
    );
  }
}

export { HomePage };
