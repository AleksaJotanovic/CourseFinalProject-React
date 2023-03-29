import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikControl from "./formikControl/FormikControl";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

const ProductOrder = () => {
  const { empty } = useContext(ProductsContext);
  const navigate = useNavigate();

  const options = [
    { key: "Select an option", value: "" },
    { key: "Credit Card", value: "creditcard" },
    { key: "PayPal", value: "paypal" },
    { key: "Payment on Delivery", value: "ondelivery" },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    comment: "",
    paymentMethod: "",
  };

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(5, "First name must have at least five characters.")
      .required("First name is required."),
    lastName: yup
      .string()
      .min(5, "Last name must have at least five characters.")
      .required("Last name is required."),
    email: yup
      .string()
      .email("Entered email is not valid.")
      .required("Email is required."),
    phoneNumber: yup.string().required("Phone number is required."),
    address: yup.string().required("Address is required."),
    comment: yup.string().nullable(),
    paymentMethod: yup.string().required("You must choose a payment method."),
  });

  const onSubmit = (value, { resetForm }) => {
    empty();
    navigate("/");
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
          <div className="container mt-1 text-center pb-5">
            <div className="row justify-content-center">
              <Form className="col-12 col-md-9 col-lg-7 col-xl-6">
                <FormikControl
                  control="floatingInput"
                  label="First Name:"
                  name="firstName"
                  placeholder="First Name..."
                  className={
                    errors.firstName && touched.firstName
                      ? "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom border-danger"
                      : "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom"
                  }
                />

                <FormikControl
                  control="floatingInput"
                  label="Last Name:"
                  name="lastName"
                  placeholder="Last Name..."
                  className={
                    errors.lastName && touched.lastName
                      ? "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom border-danger"
                      : "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom"
                  }
                />

                <FormikControl
                  control="floatingInput"
                  label="Email:"
                  name="email"
                  type="email"
                  placeholder="Email..."
                  className={
                    errors.email && touched.email
                      ? "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom border-danger"
                      : "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom"
                  }
                />

                <FormikControl
                  control="floatingInput"
                  label="Phone Number:"
                  name="phoneNumber"
                  placeholder="Phone Number..."
                  className={
                    errors.phoneNumber && touched.phoneNumber
                      ? "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom border-danger"
                      : "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom"
                  }
                />

                <FormikControl
                  control="floatingInput"
                  label="Address:"
                  name="address"
                  placeholder="Address..."
                  className={
                    errors.address && touched.address
                      ? "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom border-danger"
                      : "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom"
                  }
                />

                <FormikControl
                  control="textarea"
                  label="Comment:"
                  name="comment"
                  placeholder="Comment..."
                  className="form-control form-control-sm shadow-none rounded-0 border-0 border-bottom"
                />

                <FormikControl
                  control="select"
                  label="Payment method:"
                  name="paymentMethod"
                  options={options}
                  className={
                    errors.paymentMethod && touched.paymentMethod
                      ? "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom border-danger"
                      : "form-control form-control-sm shadow-none rounded-0 border-0 border-bottom"
                  }
                />
                <button
                  type="submit"
                  className="btn btn-sm btn-dark rounded-0 w-25"
                  disabled={!isValid}
                >
                  Confirm
                </button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ProductOrder;
