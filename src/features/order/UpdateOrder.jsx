import Button from "../../UI/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

//
//
const UpdateOrder = (order) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>;
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({ request, params }) {
  console.log("update");

  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
