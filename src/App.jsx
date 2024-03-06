import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {useState, useEffect} from "react";
import Root from "./pages/Root";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import {child, push, ref, set} from "firebase/database";
import { db } from "./firebase";
import { DB_URL } from "./firebase";
import History from "./pages/History";
import Coupons from "./pages/Coupons";

function App() {

  const [productsToShow, setProductsToShow] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  /////////// FETCHING PRODUCTS ///////////

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

  /////////// FETCHING PRODUCTS ///////////

  /////////// ORDER TO DB ///////////

  const addNewOrder = (orderToDb) => {
    const newOrderKey = push(child(ref(db), 'orders')).key;
    set(ref(db, 'orders/' + newOrderKey), orderToDb)
      .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
    });
  }

  /////////// ORDER TO DB ///////////


  const handleCartUpdate = (product) => {
    setCart([...cart, product]);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


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
          element: <Shop productsToShow={productsToShow} 
                    cart={cart} handleCartUpdate={handleCartUpdate} 
                    setCart={setCart} fetchProducts={fetchProducts} />
        },
        {
          path: '/cart',
          element: <Cart cart={cart} setCart={setCart} addNewOrder={addNewOrder} />
        },
        {
          path: '/history',
          element: <History />
        },
        {
          path: '/coupons',
          element: <Coupons />
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
