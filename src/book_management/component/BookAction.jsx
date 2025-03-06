import { useContext } from "react";
import { BookContext } from "../reducer/BookContext";

export default function BookAction({ book }) {
  const { dispatch } = useContext(BookContext);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        onClick={() => dispatch({ type: "DELETE_BOOK", id: book.id })}
        style={{ height: "20px" }}
      >
        delete
      </button>
    </div>
  );
}
