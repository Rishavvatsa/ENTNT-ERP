import { useState } from "react";
import MockOrders from "../../Data/OrderData";
import { Link } from "react-router-dom";

const RecentOrder = () => {
  const [orders, setOrders] = useState(MockOrders);

  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  return (
    <div className="bg-white px-4 pb-4 pt-3 rounded-sm border border-gray-200 flex-1 overflow-x-auto">
      <Link to="/dashboard" className="text-blue-500 block mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block mb-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>{" "}
        Back to Dashboard
      </Link>
      <strong className="text-gray-700 font-medium text-xl mb-3 block">
        Recent Orders
      </strong>
      <div className="overflow-auto">
        <table className="w-full text-gray-700 border-collapse table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 font-semibold text-sm border">ID</th>
              <th className="py-2 px-4 font-semibold text-sm border">
                Customer Name
              </th>
              <th className="py-2 px-4 font-semibold text-sm border">
                Order Date
              </th>
              <th className="py-2 px-4 font-semibold text-sm border">
                Order Status
              </th>
              <th className="py-2 px-4 font-semibold text-sm border">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="border py-2 px-4">{order.id}</td>
                <td className="border py-2 px-4">{order.customerName}</td>
                <td className="border py-2 px-4">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>
                <td className="border py-2 px-4">{order.status}</td>
                <td className="border py-2 px-4 flex items-center">
                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded mr-2"
                  >
                    Delete
                  </button>
                  <select
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value)
                    }
                    className="py-1 px-2 md:py-2 md:px-3 border border-gray-300 rounded-md"
                  >
                    <option value="Cancel">Cancel</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
