import { useState } from "react";

export default function WishList({ wishes, dispatch }) {
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  function handleEditClick(wish) {
    setEditId(wish.id);
    setEditText(wish.text);
  }

  function handleSaveEdit(id) {
    dispatch({ type: "UPDATE_WISH", id, newText: editText });
    setEditId(null);
  }

  return (
    <div>
      <h2>Wislist</h2>
      <ul>
        {wishes.map((wish) => (
          <li key={wish.id}>
            {editId === wish.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(wish.id)}>save</button>
              </>
            ) : (
              <>
                {wish.text}
                <input
                  type="checkbox"
                  checked={wish.status}
                  onChange={() =>
                    dispatch({ type: "SWITCH_STATUS", id: wish.id })
                  }
                />
                <button onClick={() => handleEditClick(wish)}>edit</button>
                <button
                  onClick={() => dispatch({ type: "DELETE_WISH", id: wish.id })}
                >
                  delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
