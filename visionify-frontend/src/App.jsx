import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage, HomeLayout, Error } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<Error />,
    children:[
      {
        index:true,
        element:<LandingPage />,
      }
    ]

  }

])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
