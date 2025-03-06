import BookForm from "./component/BookForm";
import BookList from "./component/BookList";
import BookProvider from "./reducer/BookContext";

export default function App() {
  return (
    <BookProvider>
      <BookForm />
      <BookList />
    </BookProvider>
  );
}
