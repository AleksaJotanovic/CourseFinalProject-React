import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Select = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-group mb-3 text-start">
      <label className="asterisk" style={{ marginLeft: "13px" }} htmlFor={name}>
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="form-select shadow-none rounded-0 border border-top-0 border-end-0 border-start-0"
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Select;
