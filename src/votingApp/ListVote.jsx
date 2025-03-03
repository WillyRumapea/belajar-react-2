export default function ListVote({ votes, dispatch }) {
  return (
    <div>
      <h2>List Vote</h2>
      <ul>
        {votes.map((vote) => {
          return (
            <li key={vote.id}>
              {vote.name}
              <div>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT_VOTE", id: vote.id })
                  }
                >
                  up
                </button>
                <input value={vote.votes} readOnly></input>
                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT_VOTE", id: vote.id })
                  }
                >
                  down
                </button>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_CANDIDATE", id: vote.id })
                }
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
