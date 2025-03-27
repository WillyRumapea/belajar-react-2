export default function ListOrder({ orders, deletedOrder }) {
  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => {
          return (
            <li key={order.id}>
              <div>
                <h2>Nama: {order.orderName}</h2>
                <p>No meja: {order.tableNum}</p>
                <p>Pesanan: {order.order}</p>
                <p>Tagihan: {order.bill}</p>
              </div>
              <button onClick={() => deletedOrder(order.id)}>deleted</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
