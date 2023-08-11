export interface IChangePassValues {
  password: string;
  confirmPassword: string;
}

export interface IRestorePassValues {
  email: string;
}

export interface IResetPassValues {
  resetToken: string;
  newPassword: string;
}
