import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const FloatingInput = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div className="form-floating mb-3">
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
      <label className="asterisk" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
