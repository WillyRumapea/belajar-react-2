import Content from "./Content";
import ThemeProvider from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Content />
    </ThemeProvider>
  );
}
