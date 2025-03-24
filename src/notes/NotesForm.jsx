import { useState } from "react";

export default function NotesForm({ onAddNote }) {
  const [text, setText] = useState("");

  function hanldeSetText(e) {
    setText(e.target.value);
  }

  function submitNote(e) {
    e.preventDefault();
    onAddNote(text);
    setText("");
  }
  return (
    <div>
      <h2>Note Form</h2>
      <form>
        <input type="text" value={text} onChange={hanldeSetText} />
        <button onClick={submitNote}>submit</button>
      </form>
    </div>
  );
}
