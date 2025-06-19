import { useSelector } from 'react-redux';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import BaseLayout from './layouts';

import CategoriesPage from './pages/Categories';
import CreateBlog from './pages/CreateProject.page';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login.page';
import NotFound from './pages/NotFound.page';
import ReviewManagementPage from './pages/ReviewManagement.page';
import ReviewsPage from './pages/Reviews.page';
import SettingsPage from './pages/Settings.page';
import SubCategoriesPage from './pages/SubCategories.page';
import { selectAuth } from './store/features/auth';

const privateRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/create',
        element: <CreateBlog />,
      },
      {
        path: '/categories',
        element: <CategoriesPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '/subcategories',
        element: <SubCategoriesPage />,
      },
      {
        path: '/text-reviews',
        element: <ReviewsPage type="text" />,
      },
      {
        path: '/video-reviews',
        element: <ReviewsPage type="video" />,
      },
      {
        path: '/manage-reviews',
        element: <ReviewManagementPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const publicRouter = createHashRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export function Router() {
  const auth = useSelector(selectAuth);

  return (
    <RouterProvider
      router={auth?.accessToken ? privateRouter : publicRouter}
      key={auth?.user?._id || '1'}
    />
  );
}
