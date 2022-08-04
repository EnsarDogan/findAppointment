export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export function isRequired(value) {
  return value ? undefined : "Required";
}

export function isValidEmail(value) {
  return /\S+@\S+\.\S+/.test(value) ? undefined : "Invalid Email";
}
