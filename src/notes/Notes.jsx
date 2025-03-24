import { useReducer } from "react";
import { v4 } from "uuid";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

const initialNote = [
  {
    id: 1,
    text: "belajar react",
    done: true,
  },
];

function notesRecuder(state, action) {
  switch (action.type) {
    case "ADD_NOTE": {
      const newNote = [
        ...state,
        {
          id: v4(),
          text: action.text,
          done: false,
        },
      ];
      console.log(newNote);
      return newNote;
    }
    case "CHANGE_STATUS": {
      const changeStat = state.map((note) =>
        note.id === action.id ? { ...note, done: !note.done } : note
      );
      return changeStat;
    }
    case "DELETE_NOTE": {
      const delNote = state.filter((note) => note.id !== action.id);
      return delNote;
    }
  }
}

export default function Notes() {
  const [notes, dispatch] = useReducer(notesRecuder, initialNote);

  function handleAddNote(text) {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  function handleChangeNote(id) {
    dispatch({
      type: "CHANGE_STATUS",
      id,
    });
  }

  function handleDeleteNote(id) {
    dispatch({
      type: "DELETE_NOTE",
      id,
    });
  }

  return (
    <div>
      <h1>Notes APP</h1>
      <NotesForm onAddNote={handleAddNote} />
      <NotesList
        notes={notes}
        changeStat={handleChangeNote}
        delNote={handleDeleteNote}
      />
    </div>
  );
}
