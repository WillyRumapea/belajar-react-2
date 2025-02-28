import { useReducer } from "react";
import { v4 } from "uuid";
import WishForm from "./WishForm";
import WishList from "./WishList";

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_WISH": {
      const newWish = [
        ...state,
        {
          id: v4(),
          text: action.text,
          cate: action.cate,
          status: false,
        },
      ];
      console.log(newWish);
      return newWish;
    }
    case "SWITCH_STATUS":
      return state.map((wish) =>
        wish.id === action.id ? { ...wish, status: !wish.status } : wish
      );
    case "UPDATE_WISH":
      return state.map((wish) =>
        wish.i === action.id ? { ...wish, text: action.newText } : wish
      );
    case "DELETE_WISH":
      return state.filter((wish) => wish.id !== action.id);
    default:
      return state;
  }
}

export default function WishListApp() {
  const [wishes, dispatch] = useReducer(wishlistReducer, []);

  return (
    <>
      <h1>Wislist App</h1>
      <WishForm dispatch={dispatch} />
      <WishList wishes={wishes} dispatch={dispatch}></WishList>
    </>
  );
}
