import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <ul className="divide-y-8 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;

export async function loader() {
  const menu = await getMenu();
  return menu;
}
