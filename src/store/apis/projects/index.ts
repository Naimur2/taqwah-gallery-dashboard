/* eslint-disable import/order */
import {
  DeleteV1ProjectsDeleteIdSuccessfulResponse,
  GetV1ProjectsGetIdSuccessfulResponse,
  GetV1ProjectsGetSuccessfulResponse,
  GetV1ProjectsTagsSuccessfulResponse,
  PostV1ProjectsAddRequestBody,
  PostV1ProjectsAddSuccessfulResponse,
  PutV1ProjectsIdRequestBody,
  PutV1ProjectsIdSuccessfulResponse,
  PutV1ProjectsUpdateSequenceRequestBody,
  PutV1ProjectsUpdateSequenceSuccessfulResponse,
} from '@/store/api';
import { TPaginationWithSearch } from '@/store/types';
import queryString from 'query-string';
import { apiSlice } from '..';

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<GetV1ProjectsGetSuccessfulResponse, TPaginationWithSearch | void>({
      query: (data) => `projects/get?${queryString.stringify(data || {})}`,
      providesTags: ['projects'],
    }),
    getMoreProjects: builder.query<GetV1ProjectsGetSuccessfulResponse, TPaginationWithSearch>({
      query: (data) => `projects/get?${queryString.stringify(data)}`,
      onQueryStarted: async ({ page, search, limit }, { dispatch, queryFulfilled }) => {
        const response = await queryFulfilled;
        const options: Partial<TPaginationWithSearch> = {};

        if (page && limit) {
          options.page = page - 1;
          options.limit = limit;
        }

        if (search) {
          options.search = search;
        }

        if (response.data.data.data.length > 0) {
          dispatch(
            projectsApiSlice.util.updateQueryData('getProjects', options, (draft) => {
              // eslint-disable-next-line no-param-reassign
              draft.data.meta = response.data.data.meta;
              draft.data.data.push(...response.data.data.data);
            })
          );
        }
      },
    }),
    getSingleProjects: builder.query<GetV1ProjectsGetIdSuccessfulResponse, string>({
      query: (id) => `projects/get/${id}`,
      providesTags: ['projects'],
    }),
    getTags: builder.query<GetV1ProjectsTagsSuccessfulResponse, void>({
      query: () => 'projects/tags',
      providesTags: ['projects'],
    }),
    addProject: builder.mutation<PostV1ProjectsAddSuccessfulResponse, PostV1ProjectsAddRequestBody>(
      {
        query: (body) => ({
          url: 'projects/add',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['projects', 'categories'],
      }
    ),
    updateProject: builder.mutation<
      PutV1ProjectsIdSuccessfulResponse,
      PutV1ProjectsIdRequestBody & { id: string }
    >({
      query: ({ id, ...body }) => ({
        url: `projects/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['projects'],
    }),
    deleteProject: builder.mutation<DeleteV1ProjectsDeleteIdSuccessfulResponse, string>({
      query: (id) => ({
        url: `projects/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['projects', 'categories'],
    }),
    updateProjectSequence: builder.mutation<
      PutV1ProjectsUpdateSequenceSuccessfulResponse,
      PutV1ProjectsUpdateSequenceRequestBody
    >({
      query: (body) => ({
        url: 'projects/update/sequence',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['projects'],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetMoreProjectsQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetSingleProjectsQuery,
  useLazyGetSingleProjectsQuery,
  useGetTagsQuery,
  useUpdateProjectSequenceMutation,
} = projectsApiSlice;
