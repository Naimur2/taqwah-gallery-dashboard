/* eslint-disable import/order */
import {
  DeleteV1ReviewsDeleteIdSuccessfulResponse,
  GetV1ReviewsGetIdSuccessfulResponse,
  GetV1ReviewsGetSuccessfulResponse,
  PostV1ReviewsAddRequestBody,
  PostV1ReviewsAddSuccessfulResponse,
  PutV1ReviewsIdRequestBody,
  PutV1ReviewsIdSuccessfulResponse,
} from '@/store/api';
import queryString from 'query-string';
import { apiSlice } from '..';
import { TGetReviewsOptions } from './type';

export const reviewsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query<GetV1ReviewsGetSuccessfulResponse, TGetReviewsOptions>({
      query: (data) => `reviews/get?${queryString.stringify(data)}`,
      providesTags: ['reviews'],
    }),
    getSingleReview: builder.query<GetV1ReviewsGetIdSuccessfulResponse, string>({
      query: (id) => `reviews/get/${id}`,
      providesTags: ['reviews'],
    }),
    addReview: builder.mutation<PostV1ReviewsAddSuccessfulResponse, PostV1ReviewsAddRequestBody>({
      query: (body) => ({
        url: 'reviews/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['reviews'],
    }),
    updateReview: builder.mutation<
      PutV1ReviewsIdSuccessfulResponse,
      PutV1ReviewsIdRequestBody & { id: string }
    >({
      query: ({ id, ...body }) => ({
        url: `reviews/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['reviews'],
    }),
    deleteReview: builder.mutation<DeleteV1ReviewsDeleteIdSuccessfulResponse, string>({
      query: (id) => ({
        url: `reviews/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['reviews'],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetSingleReviewQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useLazyGetSingleReviewQuery,
} = reviewsApiSlice;
