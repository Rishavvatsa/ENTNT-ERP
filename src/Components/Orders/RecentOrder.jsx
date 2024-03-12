import { useState } from "react";
import { Link } from "react-router-dom";
import MockOrders from "../../Data/OrderData";
const RecentOrder = () => {
  const [orders, setOrders] = useState(MockOrders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

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

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="relative bg-white px-4 pb-4 pt-3 rounded-sm border border-gray-200 flex-1 overflow-x-auto">
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
        <table className="w-full text-gray-700 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 font-semibold text-sm border">
                Order Id
              </th>
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
                <td className="border py-2 px-4 flex items-center justify-between">
                  <button
                    onClick={() => openModal(order)}
                    className="text-blue-500 hover:underline mr-3"
                  >
                    View Order
                  </button>
                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                  <select
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value)
                    }
                    className="ml-3 py-1 px-2 border rounded"
                  >
                    <option value="Cancel">Cancel</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Pending">Pending</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-1/2">
            <h2 className="text-xl font-bold">Order Details</h2>
            {selectedOrder && (
              <div>
                <p>Order Id: {selectedOrder.id}</p>
                <p>Customer Name: {selectedOrder.customerName}</p>
                <p>
                  Order Date:{" "}
                  {new Date(selectedOrder.orderDate).toLocaleDateString()}
                </p>
                <p>Status: {selectedOrder.status}</p>
              </div>
            )}
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentOrder;
