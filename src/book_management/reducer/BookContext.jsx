import { useReducer, createContext } from "react";
import { bookReducer } from "./BookReducer";

export const BookContext = createContext("");

export default function BookProvider({ children }) {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <>
      <BookContext.Provider value={{ books, dispatch }}>
        {children}
      </BookContext.Provider>
    </>
  );
}
