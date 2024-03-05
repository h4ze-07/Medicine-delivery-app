import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {useState, useEffect} from "react";
import Root from "./pages/Root";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { DB_URL } from "./firebase";

function App() {

  const [productsToShow, setProductsToShow] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const fetchProducts = async (URL) => {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('Fetching went wrong!')
    }

    const data = await response.json();

    let loadedProducts = [];

    for (const item in data) {
      loadedProducts.push( {
          productId: data[item].productId,
          img: data[item].img,
          name: data[item].name,
          price: data[item].price,
          shop: URL.slice(URL.indexOf('shop'), -5),
      })
    }

    setProductsToShow(loadedProducts);
  }

  const handleCartUpdate = (product) => {
    setCart([...cart, product]);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // useEffect(() => {
    
  // }, [productsToShow])


  useEffect(() => {
    fetchProducts(`${DB_URL}/shop1.json`);
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Shop productsToShow={productsToShow} cart={cart} handleCartUpdate={handleCartUpdate} setCart={setCart}/>
        },
        {
          path: '/cart',
          element: <Cart cart={cart} />
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
