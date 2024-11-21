import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./UI/Home";
import Layout from "./UI/Layout";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as orderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import Error from "./UI/Error";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
// create route description

// *****
// BEST DECLARATIVE WAY TO DO IT, AS ALL THE OTHER ROUTES HAVE THE HOME ROUTE AS ENTRY.

//
// const routerDescription = createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route index element={<Home />}></Route>
//     <Route path="/menu" element={<Menu />}></Route>
//     <Route path="/cart" element={<Cart />}></Route>
//     <Route path="/order/new" element={<CreateOrder />}></Route>
//     <Route path="/order/:orderId" element={<Order />}></Route>
//   </Route>
// );

const routerDescription = createRoutesFromElements(
  <Route element={<Layout />} errorElement={<Error />}>
    {/* <Route path="/" element={<Home />}></Route> */}
    <Route index element={<Home />}></Route>
    <Route
      path="/menu"
      element={<Menu />}
      loader={menuLoader}
      errorElement={<Error />}
    ></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route
      path="/order/new"
      element={<CreateOrder />}
      action={orderAction}
    ></Route>
    <Route
      path="/order/:orderId"
      element={<Order />}
      loader={orderLoader}
      errorElement={<Error />}
      action={updateOrderAction}
    ></Route>
  </Route>,
);

// create router
const router = createBrowserRouter(routerDescription);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
