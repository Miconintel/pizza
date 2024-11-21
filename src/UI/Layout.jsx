import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // const isLoading = true;

  return (
    <div className="grid-rows-[auto 1fr auto] grid h-screen">
      {isLoading && <Loader />}
      <Header></Header>
      {/* <main className="max-w-14xl mx-auto bg-red-900">
        <Outlet />
      </main> */}
      {/* putting a div allows for the item to want to grow, and then the main item will have to want to grow
      but then stop at the max */}

      <div className="overflow-scroll">
        <main className="mx-auto max-w-6xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default Layout;
