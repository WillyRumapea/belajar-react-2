import SoInfo from "./SoInfo";
import SoList from "./SoList";
import SoProvider from "./SoProvider";
import SoUpdate from "./SoUpdate";

export default function App() {
  return (
    <SoProvider>
      <SoInfo />
      <SoUpdate />
      <SoList />
    </SoProvider>
  );
}
