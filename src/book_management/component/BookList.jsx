import { useContext } from "react";
import { BookContext } from "../reducer/BookContext";
import BookItem from "./BookItem";

export default function BookList() {
  const { books } = useContext(BookContext);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.length === 0 ? (
          <p>tidak ada buku!!</p>
        ) : (
          books.map((book) => <BookItem book={book} key={book.id} />)
        )}
      </ul>
    </div>
  );
}
