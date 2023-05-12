export const USERNAME_REGEX = new RegExp(
  "^[a-zA-Z].[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$"
);
export const PASSWORD_REGEX = new RegExp(
  "^(?=.*[A-Z])(?=.*d)(?=.*[^ws]).{8,}$"
);
