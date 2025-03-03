import Article from "./Article";
import ThemeProvider from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Article />
    </ThemeProvider>
  );
}
