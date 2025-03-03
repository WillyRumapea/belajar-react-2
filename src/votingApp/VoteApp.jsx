import { useReducer } from "react";
import { v4 } from "uuid";
import VoteForm from "./VoteForm";
import ListVote from "./ListVote";

function voteReducer(state, action) {
  switch (action.type) {
    case "ADD_CANDIDATE": {
      const newCandidate = [
        ...state,
        { id: v4(), name: action.name, votes: action.votes },
      ];
      return newCandidate;
    }
    case "INCREMENT_VOTE": {
      const vote = state.map((vote) =>
        vote.id === action.id
          ? {
              ...vote,
              votes: vote.votes + 1,
            }
          : vote
      );
      return vote;
    }
    case "DECREMENT_VOTE": {
      const vote = state.map((vote) =>
        vote.id === action.id
          ? {
              ...vote,
              votes: Math.max(vote.votes - 1, 1),
            }
          : vote
      );
      return vote;
    }
    case "DELETE_CANDIDATE":
      return state.filter((candidate) => candidate.id !== action.id);
  }
}

export default function VoteApp() {
  const [votes, dispatch] = useReducer(voteReducer, []);

  return (
    <>
      <h1>VOTE APP</h1>
      <VoteForm dispatch={dispatch} />
      <ListVote votes={votes} dispatch={dispatch} />
    </>
  );
}
