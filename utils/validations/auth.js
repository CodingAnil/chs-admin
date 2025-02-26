let emailRwegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;

export const loginValidate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email or username is required";
  }
  // else if (!emailRwegex.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export const forgotValidate = (values) => {
  const errors = {};
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is required";
  }
  // else if (!emailRwegex.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }
  return errors;
};

export const resetPwdValidate = (data) => {
  const errors = {};
  if (!data.password) {
    errors.password = "Please enter password";
  } else if (!passwordRegex.test(data.password)) {
    errors.password =
      "Your password must be at least 8 characters long, contain at least one uppercase letter,one lowercase letter, one digit, and one special character.";
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = "Please enter confirm password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Password and Confirm password are not mached";
  }
  if (!data.phoneNumber) {
    errors.phoneNumber = "Please enter Phone Number";
  }
  if (!data.otp) {
    errors.otp = "Please enter Otp";
  }
  return errors;
};
