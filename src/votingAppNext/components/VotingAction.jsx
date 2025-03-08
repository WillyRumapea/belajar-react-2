import { useContext } from "react";
import { VotingContext } from "../reducer/VotingContext";

export default function VotingAction({ vote }) {
  const { dispatch } = useContext(VotingContext);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => dispatch({ type: "INCREMENT_VOTE", id: vote.id })}
        >
          tambah!
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT_VOTE", id: vote.id })}
        >
          kurang!
        </button>
        <button onClick={() => dispatch({ type: "RESET_VOTE", id: vote.id })}>
          reset!
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: "DELETE_CANDIDATE", id: vote.id })}
      >
        Delete!
      </button>
    </div>
  );
}
