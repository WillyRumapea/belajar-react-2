import { useContext } from "react";
import { VotingContext } from "../reducer/VotingContext";
import VotingItem from "./VotingItem";

export default function VotingList() {
  const { votings } = useContext(VotingContext);

  return (
    <div>
      <h2>Vote List</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "50vw",
          gap: "20px",
        }}
      >
        {votings.length === 0 ? (
          <p>belum ada Kandidat</p>
        ) : (
          votings.map((vote) => <VotingItem key={vote.id} vote={vote} />)
        )}
      </ul>
    </div>
  );
}
