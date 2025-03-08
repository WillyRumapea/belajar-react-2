import VotingForm from "./components/VotingForm";
import VotingList from "./components/VotingList";
import VotingProvider from "./reducer/VotingContext";

export default function App() {
  return (
    <VotingProvider>
      <VotingForm />
      <VotingList />
    </VotingProvider>
  );
}
