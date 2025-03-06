import { useContext } from "react";
import { BookContext } from "../reducer/BookContext";
import BookAction from "./BookAction";

export default function BookItem({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <li>
      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          alignContent: "flex-start",
          maxWidth: "25vw",
        }}
      >
        <p style={{ fontWeight: "bold" }}>{book.name}</p>
        <input
          type="checkbox"
          style={{ width: "20px" }}
          onChange={() => dispatch({ type: "UPDATE_READ", id: book.id })}
        />
        <BookAction book={book} />
      </div>
    </li>
  );
}
