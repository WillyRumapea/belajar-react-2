import { useState } from "react";
import OrderForm from "./orderForm";
import ListOrder from "./ListOrder";
import { v4 } from "uuid";

export default function AppOrder() {
  const [orders, setOrders] = useState([]);

  function handleOrders(orderName, tableNum, order, bill, isPaid) {
    const newOrder = {
      id: v4(),
      orderName: orderName,
      tableNum: tableNum,
      order: order,
      bill: bill,
      isPaid: isPaid,
    };
    console.log(newOrder);
    setOrders((ordersBef) => [...ordersBef, newOrder]);
  }

  function handleDeleteOrder(id) {
    setOrders((ordersBef) => ordersBef.filter((order) => order.id !== id));
  }

  return (
    <div>
      <h1>Restaurant</h1>
      <OrderForm onAddOrder={handleOrders} />
      <ListOrder orders={orders} deletedOrder={handleDeleteOrder} />
    </div>
  );
}
