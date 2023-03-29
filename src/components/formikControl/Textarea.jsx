import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-floating mb-3">
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Textarea;

/* <textarea
name="comment"
cols="30"
rows="10"
placeholder="Comment..."
className="form-control form-control-sm shadow-none rounded-0 border border-top-0 border-end-0 border-start-0"
></textarea> */
