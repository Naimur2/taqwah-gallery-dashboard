import { useSelector } from 'react-redux';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import BaseLayout from './layouts';

import CreateBlog from './pages/CreateProject.page';
import HomePage from './pages/Home.page';
import LoginPage from './pages/Login.page';
import NotFound from './pages/NotFound.page';
import { selectAuth } from './store/features/auth';
import CategoriesPage from './pages/Categories.page';
import SubCategoriesPage from './pages/SubCategories.page';

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
        path: '/subcategories',
        element: <SubCategoriesPage />,
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

  return <RouterProvider router={auth?.accessToken ? privateRouter : publicRouter} />;
}
