import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>Hello</>,
  },
]);

export const CustomRouter = () => {
  return <RouterProvider router={router} />;
};
