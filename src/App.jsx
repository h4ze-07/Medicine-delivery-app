import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {useState, useEffect} from "react";
import Root from "./pages/Root";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Shop />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
