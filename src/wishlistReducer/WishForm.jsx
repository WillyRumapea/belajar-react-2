import { useState } from "react";

export default function WishForm({ dispatch }) {
  const [text, setText] = useState("");
  const [cate, setCate] = useState("long_term");

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function handleChangeCate(e) {
    setCate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_WISH",
      text: text,
      cate: cate,
      status: false,
    });
    setText("");
  }

  return (
    <div>
      <h2>Wish List</h2>
      <form>
        <input type="text" value={text} onChange={handleChangeText} />
        <select onChange={handleChangeCate} value={cate}>
          <option value="long_term">long term</option>
          <option value="short_term">short term</option>
        </select>
        <button onClick={handleSubmit}>add!</button>
      </form>
    </div>
  );
}
