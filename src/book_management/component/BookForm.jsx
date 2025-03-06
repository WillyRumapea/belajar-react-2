import { useContext } from "react";
import { useState } from "react";
import { BookContext } from "../reducer/BookContext";

export default function BookForm() {
  const [nameBook, setNameBook] = useState("");
  const [genreBook, setGenreBook] = useState("");
  const { dispatch } = useContext(BookContext);

  function handleNameBook(e) {
    setNameBook(e.target.value);
  }

  function handleGenreBook(e) {
    setGenreBook(e.target.value);
  }

  function submitBook(e) {
    e.preventDefault();
    if (!nameBook.trim()) return alert("nama tidak boleh kosong!!");
    dispatch({
      type: "ADD_BOOK",
      name: nameBook,
      genre: genreBook,
    });
    setNameBook("");
    setGenreBook("");
  }

  return (
    <div>
      <h2>Book Form</h2>
      <form>
        <input type="text" value={nameBook} onChange={handleNameBook} />
        <select value={genreBook} onChange={handleGenreBook}>
          <option value="Light_Novel">Light Novel</option>
          <option value="Comics">Comics</option>
          <option value="Enclyclopdia">Enclyclopdia</option>
        </select>
        <button onClick={submitBook}>Add Book</button>
      </form>
    </div>
  );
}
