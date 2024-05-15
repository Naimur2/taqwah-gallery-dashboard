import { redirect } from 'react-router-dom';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from '@/store/features/auth';
import { RootState } from '@/store/index';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL || 'http://localhost:8000/v1',
  prepareHeaders: (headers, api) => {
    const { auth } = api.getState() as RootState;
    if (auth.accessToken) {
      headers.set('authorization', `Bearer ${auth.accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);
  const status = result?.meta?.response?.status;
  const unauthorizedStatuses = [401];
  if (status && unauthorizedStatuses.includes(status)) {
    api.dispatch(logout());
    redirect('/login');
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['projects', 'categories', 'subcategories', 'tags'],
  endpoints: () => ({}),
});

const apiReducer = apiSlice.reducer;
export default apiReducer;
