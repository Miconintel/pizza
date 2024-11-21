import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../UI/Button";

// ui
const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItem;
