import { useReducer } from "react";
import { v4 } from "uuid";
import CartForm from "./CartForm";
import ListItem from "./ListItem";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = [
        ...state,
        {
          id: v4(),
          name: action.name,
          amount: action.amount,
          price: action.price,
        },
      ];
      console.log(newItem);
      return newItem;
    }
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "ADD_AMOUNT":
      return state.map((item) =>
        item.id === action.id ? { ...item, amount: item.amount + 1 } : item
      );
    case "REDUCE_AMOUNT":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, amount: Math.max(item.amount - 1, 1) }
          : item
      );
    default:
      return state;
  }
}

export default function Cart() {
  const [items, dispatch] = useReducer(cartReducer, []);

  return (
    <>
      <h1>Cart Shopping</h1>
      <CartForm dispatch={dispatch} />
      <ListItem items={items} dispatch={dispatch} />
    </>
  );
}
