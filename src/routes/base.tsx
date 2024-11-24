import Home from '@/pages/home';
import Org from '@/pages/org';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:orgId',
    element: <Org />,
  },
]);

export const CustomRouter = () => {
  return <RouterProvider router={router} />;
};
