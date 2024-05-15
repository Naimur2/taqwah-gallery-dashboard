export interface IUser {
  _id?: string;
  email?: string;
  name?: string;
}

export interface IAuthState {
  accessToken?: string;
  refreshToken?: string;
  user?: Partial<IUser> | null;
  avatar?: string;
}
