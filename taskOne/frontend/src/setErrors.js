export const setErrors = (title, body) => {
  let errors = {};
  errors.title = title ? "" : "title is requried";
  errors.body = body ? "" : "Description is requried";
  return errors;
};
