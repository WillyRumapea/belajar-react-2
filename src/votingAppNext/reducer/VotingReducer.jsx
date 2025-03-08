import { v4 } from "uuid";

export function VotingReducer(state, action) {
  switch (action.type) {
    case "ADD_CANDIDATE": {
      const newCandidate = [
        ...state,
        {
          id: v4(),
          nama: action.nama,
          noUrut: action.noUrut,
          jumSuara: 0,
        },
      ];
      console.log(newCandidate);
      return newCandidate;
    }
    case "INCREMENT_VOTE": {
      const vote = state.map((vote) =>
        vote.id === action.id ? { ...vote, jumSuara: vote.jumSuara + 1 } : vote
      );
      return vote;
    }
    case "DECREMENT_VOTE": {
      const vote = state.map((vote) =>
        vote.id === action.id
          ? { ...vote, jumSuara: Math.max(0, vote.jumSuara - 1) }
          : vote
      );
      return vote;
    }
    case "DELETE_CANDIDATE": {
      const disquCandidate = state.filter(
        (candidate) => candidate.id !== action.id
      );
      return disquCandidate;
    }
    case "RESET_VOTE": {
      const resVote = state.map((vote) =>
        vote.id === action.id ? { ...vote, jumSuara: 0 } : vote
      );
      return resVote;
    }
    default:
      return state;
  }
}
