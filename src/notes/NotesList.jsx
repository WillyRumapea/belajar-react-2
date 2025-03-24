export default function NotesList({ notes, changeStat, delNote }) {
  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <p>{note.text}</p>
              <input
                type="checkbox"
                checked={note.done}
                onChange={() => changeStat(note.id)}
              />
              <button onClick={() => delNote(note.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
