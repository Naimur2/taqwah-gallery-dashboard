/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { IAuthState, IUser } from './types';

const initialState: Partial<IAuthState> = {
  accessToken: undefined,
  refreshToken: undefined,
  user: {
    _id: undefined,
    email: undefined,
    name: undefined,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: {
        payload: {
          user: IUser;
          token: string;
          refreshToken?: string;
        };
      }
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.user = undefined;
      state.accessToken = undefined;
      state.refreshToken = undefined;
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const { login, logout ,updateUser} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user as IUser | null;
export const selectToken = (state: RootState) => state.auth.accessToken;

const authReducer = authSlice.reducer;

export default authReducer;
