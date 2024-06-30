export const checkValidSignInData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export const checkValidSignUpData = (fullName, email, password) => {
  const isFullNameValid = /^[A-Za-z][A-Za-z0-9 ]*[A-Za-z0-9]$/.test(fullName);

  if (!isFullNameValid) return "fullName is not valid";

  const message = checkValidSignInData(email, password);

  return null || message;
};
