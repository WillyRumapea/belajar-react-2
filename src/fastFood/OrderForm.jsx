import { useState } from "react";

export default function OrderForm({ onAddOrder }) {
  const [orderName, setOrderName] = useState("");
  const [tableNum, setTableNum] = useState("");
  const [order, setOrder] = useState("");
  const [bill, setBill] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  function handleOrderName(e) {
    setOrderName(e.target.value);
  }

  function handleTableNum(e) {
    setTableNum(Number(e.target.value));
  }

  function handleOrder(e) {
    setOrder(e.target.value);
  }

  function handleBill(e) {
    setBill(Number(e.target.value));
  }

  function handleIsPaid(e) {
    setIsPaid(e.target.value);
  }

  function handleSubmitOrder(e) {
    e.preventDefault();
    onAddOrder(orderName, tableNum, order, bill, isPaid);
    setOrderName("");
    setTableNum("");
    setOrder("");
    setBill("");
    setIsPaid(false);
  }

  return (
    <div>
      <h2>Order form</h2>
      <form>
        <input
          type="text"
          value={orderName}
          onChange={handleOrderName}
          placeholder="customer"
        />
        <input
          type="number"
          value={tableNum}
          onChange={handleTableNum}
          placeholder="number table"
        />
        <input
          type="text"
          value={order}
          onChange={handleOrder}
          placeholder="order"
        />
        <input
          type="number"
          value={bill}
          onChange={handleBill}
          placeholder="bill"
        />
        <select value={isPaid} onChange={handleIsPaid}>
          <option value="paid">paid</option>
          <option value="unpaid">unpaid</option>
        </select>
        <button onClick={handleSubmitOrder}>submit</button>
      </form>
    </div>
  );
}
