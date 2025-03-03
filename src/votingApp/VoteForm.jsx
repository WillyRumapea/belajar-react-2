import { useState } from "react";

export default function VoteForm({ dispatch }) {
  const [name, setName] = useState("");
  const [vote, setVote] = useState(0);

  function handleInputName(e) {
    setName(e.target.value);
  }

  function handleInputVote(e) {
    const value = Math.max(setVote(Number(e.target.value), 0));
    return value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_CANDIDATE",
      name: name,
      votes: vote,
    });
    setName("");
    setVote(0);
  }

  return (
    <div>
      <h2>Vote Form</h2>
      <form>
        <input type="text" value={name} onChange={handleInputName} />
        <input type="number" value={vote} onChange={handleInputVote} />
        <button onClick={handleSubmit}>add</button>
      </form>
    </div>
  );
}
