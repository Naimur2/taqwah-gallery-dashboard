/* eslint-disable import/order */
import {
  DeleteV1CategoriesDeleteIdSuccessfulResponse,
  GetV1CategoriesGetSuccessfulResponse,
  PostV1CategoriesAddRequestBody,
  PostV1CategoriesAddSuccessfulResponse,
  PostV1CategoriesUpdateSequenceErrorResponse,
  PostV1CategoriesUpdateSequenceRequestBody,
  PutV1CategoriesIdRequestBody,
  PutV1CategoriesIdSuccessfulResponse,
} from '@/store/api';
import { apiSlice } from '..';

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<GetV1CategoriesGetSuccessfulResponse, void>({
      query: () => 'categories/get',
      providesTags: ['categories'],
    }),
    addCategories: builder.mutation<
      PostV1CategoriesAddSuccessfulResponse,
      PostV1CategoriesAddRequestBody
    >({
      query: (body) => ({
        url: 'categories/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['categories'],
    }),
    updateCategories: builder.mutation<
      PutV1CategoriesIdSuccessfulResponse,
      PutV1CategoriesIdRequestBody & { id: string }
    >({
      query: ({ id, ...body }) => ({
        url: `categories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['categories'],
    }),
    deleteCategories: builder.mutation<DeleteV1CategoriesDeleteIdSuccessfulResponse, string>({
      query: (id) => ({
        url: `categories/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['categories', 'projects'],
    }),
    updateCategoriesSequnce: builder.mutation<
      PostV1CategoriesUpdateSequenceErrorResponse,
      PostV1CategoriesUpdateSequenceRequestBody
    >({
      query: (body) => ({
        url: 'categories/update/sequence',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['categories'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useAddCategoriesMutation,
  useUpdateCategoriesMutation,
  useDeleteCategoriesMutation,
  useUpdateCategoriesSequnceMutation,
} = categoriesApiSlice;
