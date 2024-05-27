/* eslint-disable import/order */
import {
  DeleteV1SubcategoriesDeleteIdSuccessfulResponse,
  GetV1SubcategoriesGetSuccessfulResponse,
  PostV1SubcategoriesAddRequestBody,
  PostV1SubcategoriesAddSuccessfulResponse,
  PutV1SubcategoriesIdRequestBody,
  PutV1SubcategoriesIdSuccessfulResponse,
} from '@/store/api';
import { apiSlice } from '..';

export const subCategoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubCategories: builder.query<GetV1SubcategoriesGetSuccessfulResponse, void>({
      query: () => 'subcategories/get',
      providesTags: ['subcategories'],
    }),
    addSubCategories: builder.mutation<
      PostV1SubcategoriesAddSuccessfulResponse,
      PostV1SubcategoriesAddRequestBody
    >({
      query: (body) => ({
        url: 'subcategories/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['subcategories'],
    }),
    updateSubCategories: builder.mutation<
      PutV1SubcategoriesIdSuccessfulResponse,
      PutV1SubcategoriesIdRequestBody & { id: string }
    >({
      query: ({ id, ...body }) => ({
        url: `subcategories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['subcategories'],
    }),
    deleteSubCategories: builder.mutation<DeleteV1SubcategoriesDeleteIdSuccessfulResponse, string>({
      query: (id) => ({
        url: `subcategories/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['subcategories', 'projects'],
    }),
  }),
});

export const {
  useGetSubCategoriesQuery,
  useAddSubCategoriesMutation,
  useUpdateSubCategoriesMutation,
  useDeleteSubCategoriesMutation,
} = subCategoriesApiSlice;
