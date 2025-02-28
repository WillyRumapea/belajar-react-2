import { useState } from "react";

export default function CartForm({ dispatch }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  function handleNameItem(e) {
    setName(e.target.value);
  }

  function handleAmountItem(e) {
    setAmount(parseInt(e.target.value) || 0);
  }

  function handlePriceItem(e) {
    setPrice(parseFloat(e.target.value) || 0);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      name: name,
      amount: amount,
      price: price,
    });
    setName("");
    setAmount(0);
    setPrice(0);
  }

  const style = {
    display: "flex",
    flexDirection: "column",
    width: "20vw",
    gap: "10px",
  };

  return (
    <div>
      <h2>Cart Form</h2>
      <form style={style}>
        <label>
          Name
          <input type="text" value={name} onChange={handleNameItem} />
        </label>
        <label>
          Amount
          <input type="number" value={amount} onChange={handleAmountItem} />
        </label>
        <label>
          Price
          <input type="number" value={price} onChange={handlePriceItem} />
        </label>
        <button onClick={handleSubmit} style={{ width: "80px" }}>
          Add Cart
        </button>
      </form>
    </div>
  );
}
