import { useReducer } from "react";
import { createContext } from "react";
import { VotingReducer } from "./VotingReducer";

export const VotingContext = createContext();

export default function VotingProvider({ children }) {
  const [votings, dispatch] = useReducer(VotingReducer, []);

  return (
    <>
      <VotingContext.Provider value={{ votings, dispatch }}>
        {children}
      </VotingContext.Provider>
    </>
  );
}
