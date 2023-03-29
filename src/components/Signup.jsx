import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikControl from "./formikControl/FormikControl";

const Signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(5, "First name must be at least 5 characters long.")
      .required("First name is required"),
    lastName: yup
      .string()
      .min(5, "Last name must be at least 5 characters long.")
      .required("Last name is required"),
    email: yup
      .string()
      .email("Entered email is not valid.")
      .required("Email is required"),
    password: yup
      .string()
      .min(5, "Password must have at least 5 characters.")
      .required(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {({ errors, touched, isValid }) => {
        return (
          <div className="login-bg">
            <div className="container pt-5">
              <div className="row justify-content-center">
                <div className="text-center mt-3 mb-4">
                  <h3>Sign Up</h3>
                </div>
                <Form className="col-8 col-md-6 col-lg-4 col-xl-3">
                  <div>
                    <FormikControl
                      control="input"
                      label="First Name:"
                      name="firstName"
                      className={
                        errors.firstName && touched.firstName
                          ? "form-control form-control-sm rounded-0 shadow-sm border-danger"
                          : "form-control form-control-sm rounded-0 shadow-sm"
                      }
                    />
                  </div>
                  <div>
                    <FormikControl
                      control="input"
                      label="Last Name:"
                      name="lastName"
                      className={
                        errors.lastName && touched.lastName
                          ? "form-control form-control-sm rounded-0 shadow-sm border-danger"
                          : "form-control form-control-sm rounded-0 shadow-sm"
                      }
                    />
                  </div>
                  <div>
                    <FormikControl
                      control="input"
                      type="email"
                      label="Email:"
                      name="email"
                      className={
                        errors.email && touched.email
                          ? "form-control form-control-sm rounded-0 shadow-sm border-danger"
                          : "form-control form-control-sm rounded-0 shadow-sm"
                      }
                    />
                  </div>
                  <div>
                    <FormikControl
                      control="input"
                      type="password"
                      label="Password:"
                      name="password"
                      className={
                        errors.password && touched.password
                          ? "form-control form-control-sm rounded-0 shadow-sm border-danger"
                          : "form-control form-control-sm rounded-0 shadow-sm"
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <label className="form-label">Forgot password?</label>
                    <br />
                    <input
                      className="btn btn-sm btn-light rounded-0 col-12"
                      type="submit"
                      value="Sign Up"
                      disabled={!isValid}
                    />
                    <p>
                      Already a member? <Link to="/login">Log In</Link>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Signup;
