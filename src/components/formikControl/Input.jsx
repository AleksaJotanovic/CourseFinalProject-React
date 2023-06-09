import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </>
  );
};

export default Input;
