import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";
import FormikControl from "./formikControl/FormikControl";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Email is not valid.")
      .required("Email is required."),
    password: yup
      .string()
      .min(5, "Your password must contain at least five characters.")
      .required("Password is required."),
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
      {({ isValid, errors, touched }) => {
        return (
          <div className="login-bg">
            <div className="container pt-5">
              <div className="row justify-content-center">
                <div className="text-center mt-5">
                  <h3>Log In</h3>
                  <p>
                    New to this site? <Link to="/signup">Sign Up</Link>
                  </p>
                </div>
                <Form className="col-8 col-md-6 col-lg-4 col-xl-3">
                  <div>
                    <FormikControl
                      control="input"
                      label="Email:"
                      name="email"
                      type="email"
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
                      label="Password:"
                      name="password"
                      type="password"
                      className={
                        errors.password && touched.password
                          ? "form-control form-control-sm rounded-0 shadow-sm border-danger"
                          : "form-control form-control-sm rounded-0 shadow-sm"
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <label className="form-label">Forgot password?</label>
                    <input
                      className="btn btn-sm btn-light rounded-0 col-12"
                      type="submit"
                      value="Log In"
                      disabled={!isValid}
                    />
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

export default Login;
