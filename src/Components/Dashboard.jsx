import { Link } from "react-router-dom";
import {
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineViewGrid,
} from "react-icons/hi";
import OrdersCalendarView from "./Orders/Calendar";
import logo from "../assets/erp.png";
import { IoBagHandle } from "react-icons/io5";
const Dashboard = ({ totalProducts, totalOrders }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-neutral-900 text-white w-full lg:w-64 flex-none py-10 px-4 gap-8">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-10" alt="ERP logo" />
          <h1 className="text-3xl font-semibold  text-white">MY ERP</h1>
        </div>
        <hr />
        <div className="flex items-center mb-4">
          <HiOutlineViewGrid className="text-white w-8 h-8" />
          <h2 className="flex items-center gap-2 text-xl p-2  rounded-md">
            Dashboard
          </h2>
        </div>
        <hr></hr>

        <ul>
          <li className="mb-4 flex items-center">
            <HiOutlineCube className=" text-white w-6 h-6" />
            <Link
              to="/products"
              className="flex items-center gap-2 text-lg p-2 hover:bg-neutral-700 rounded-md"
            >
              Products
            </Link>
          </li>
          <li className="flex items-center">
            <HiOutlineShoppingCart className="text-white w-6 h-6" />
            <Link
              to="/orders"
              className="flex items-center gap-2 text-lg p-2 hover:bg-neutral-700 rounded-md"
            >
              Orders
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-grow p-8">
        <h2 className="text-2xl font-bold mb-6 border-b border-b-black text-center">
          Welcome to My ERP
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-xl p-6 flex items-center justify-center">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
              <IoBagHandle className="text-2xl text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2">Total Products</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {totalProducts + "+"}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 flex items-center justify-center">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
              <IoBagHandle className="text-2xl text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2">Total Orders</h3>
              <p className="text-3xl font-bold text-red-500">
                {totalOrders + "+"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 ">
          <h3 className="text-2xl font-semibold mb-4 text-purple-600 ">
            Order Calendar
          </h3>
          <div className="bg-white rounded-lg  p-4">
            <OrdersCalendarView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
