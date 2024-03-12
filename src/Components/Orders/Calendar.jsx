import { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import MockOrders from "../../Data/OrderData";
import "react-calendar/dist/Calendar.css";

function OrdersCalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const ordersOnSelectedDate = MockOrders.filter(
      (order) =>
        new Date(order.orderDate).toDateString() === date.toDateString()
    );
    setSelectedOrders(ordersOnSelectedDate);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const tileContent = ({ date }) => {
    const ordersOnDate = MockOrders.filter(
      (order) =>
        new Date(order.orderDate).toDateString() === date.toDateString()
    );

    return (
      <div className="relative">
        {ordersOnDate.length > 0 && <div className="order-marker"></div>}
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      {/* Calendar */}
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={tileContent}
          className="calendar"
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Orders Calendar Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h3 className="modal-title">Orders on {selectedDate.toDateString()}</h3>
        <div className="modal-content">
          {selectedOrders.length > 0 ? (
            selectedOrders.map((order) => (
              <div key={order.id} className="order-details">
                <p>
                  <strong>Customer Name:</strong> {order.customerName}
                </p>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
              </div>
            ))
          ) : (
            <p>No orders found for this date.</p>
          )}
        </div>
        <button onClick={handleModalClose} className="modal-close-btn">
          Close
        </button>
      </Modal>
    </div>
  );
}

export default OrdersCalendarView;
