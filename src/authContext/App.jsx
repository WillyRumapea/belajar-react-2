import AuthProvider from "./AuthProvider";
import Dashboard from "./Dashboard";
import LogginButton from "./LogginButton";
import Navbar from "./Navbar";

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Dashboard />
      <LogginButton />
    </AuthProvider>
  );
}
