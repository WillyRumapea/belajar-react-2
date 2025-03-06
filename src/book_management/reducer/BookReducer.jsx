import { v4 } from "uuid";

export function bookReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOK": {
      const newBook = [
        ...state,
        {
          id: v4(),
          name: action.name,
          genre: action.genre,
          isRead: false,
        },
      ];
      console.log(newBook);
      return newBook;
    }
    case "UPDATE_READ": {
      const readBook = state.map((book) =>
        book.id === action.id ? { ...book, isRead: !book.isRead } : book
      );
      return readBook;
    }
    case "DELETE_BOOK": {
      const deleteBook = state.filter((book) => book.id !== action.id);
      return deleteBook;
    }
    default:
      return state;
  }
}
