import Content from "./Content";
import LangProvider from "./LangProvider";
import LangToggle from "./LangToggle";

export default function App() {
  return (
    <div>
      <LangProvider>
        <Content />
        <LangToggle />
      </LangProvider>
    </div>
  );
}
