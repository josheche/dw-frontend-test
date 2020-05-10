import React from "react";
import { Link } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { authenticationService } from "@/_services";

import "@/_styles/AuthPage.scss";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    // if user logged in then go to protected home
    if (authenticationService.currentUserValue) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card -mod">
          <h2>Sign-Up</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().required("Email is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
              setStatus();
            }}
          >
            {({ errors, status, touched, isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Full Name</label>
                  <Field
                    placeholder="Test User"
                    name="fullname"
                    type="text"
                    className={"form-control"}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    placeholder="user@email.com"
                    name="email"
                    type="text"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    placeholder="test"
                    name="password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group text-center">
                  <Link to="/signin" className="btn btn-dark">
                    Sign-Up
                  </Link>
                </div>
                {status && <div className={"alert alert-danger"}>{status}</div>}
              </Form>
            )}
          </Formik>
        </div>
        <div className="wrapper_cta -left">
          <span>Already registered? </span>
          <Link to="/signin" className="link">
            Sign-in
          </Link>
        </div>
      </div>
    );
  }
}

export { SignupPage };
