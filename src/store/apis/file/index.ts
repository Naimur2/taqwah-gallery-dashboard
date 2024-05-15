/* eslint-disable import/order */
import { PostV1FileUploadSuccessfulResponse } from '@/store/api';
import { apiSlice } from '..';

export const conversationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation<PostV1FileUploadSuccessfulResponse, FormData>({
      query: (body) => ({
        url: 'file/upload',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useUploadFileMutation } = conversationsApiSlice;
