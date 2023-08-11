export interface ChangePassValues {
  confirmpassword: string;
  password: string;
}

export interface IRestorePassValues {
  email: string;
}

export interface IResetPassValues {
  resetToken: string;
  newPassword: string;
}
