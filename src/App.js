import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Components/Products";
import AddProduct from "./Components/Product/AddProduct";
import Edit from "./Components/Product/Edit";
import RecentOrder from "./Components/Orders/RecentOrder";
import RightDB from "./Components/RightDB";
import OrdersCalendarView from "./Components/Orders/Calendar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RightDB />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/orders" element={<RecentOrder />} />
          <Route path="/orderCalendar" element={<OrdersCalendarView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
