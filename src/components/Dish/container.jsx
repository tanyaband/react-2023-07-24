import { useSelector, useDispatch } from "react-redux";
import { selectDishById } from "../../store/features/dish/selectors";
import { selectDishAmountById } from "../../store/features/cart/selectors";
import { Dish } from "./component";
import { cartSlice } from "../../store/features/cart";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  const amount = useSelector((state) => selectDishAmountById(state, dishId));
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      amount={amount}
      increment={() => dispatch(cartSlice.actions.increment(dishId))}
      decrement={() => dispatch(cartSlice.actions.decrement(dishId))}
    />
  );
};