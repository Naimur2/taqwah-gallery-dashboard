import { PostV1AuthLoginRequestBody, PostV1AuthLoginSuccessfulResponse } from '@/store/api';
import { login } from '@/store/features/auth';
import { apiSlice } from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<PostV1AuthLoginSuccessfulResponse, PostV1AuthLoginRequestBody>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data: result } = await queryFulfilled;

          if (result.data.data) {
            dispatch(
              login({
                token: result.data.data?.accessToken,
                user: result.data.data?.user,
                refreshToken: result.data.data?.refreshToken,
              })
            );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
      invalidatesTags: ['categories', 'projects', 'subcategories', 'tags'],
    }),
    register: builder.mutation({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
