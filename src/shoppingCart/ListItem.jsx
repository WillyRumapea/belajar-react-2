export default function ListItem({ items, dispatch }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              <p>Rp {item.price}</p>
              <div>
                <button
                  onClick={() => dispatch({ type: "ADD_AMOUNT", id: item.id })}
                >
                  +
                </button>
                <input type="number" value={item.amount} readOnly />
                <button
                  onClick={() =>
                    dispatch({ type: "REDUCE_AMOUNT", id: item.id })
                  }
                >
                  -
                </button>
              </div>
              <button
                onClick={() => dispatch({ type: "DELETE_ITEM", id: item.id })}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}
