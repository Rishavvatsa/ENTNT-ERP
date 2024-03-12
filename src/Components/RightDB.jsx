// utils.js
import mockProducts from "../Data/data";
import MockOrders from "../Data/OrderData";
import Dashboard from "./Dashboard";
export const getTotalProducts = () => mockProducts.length;

export const getTotalOrders = () => MockOrders.length;

const RightDB = () => {
  const totalProducts = getTotalProducts();
  const totalOrders = getTotalOrders();

  return <Dashboard totalProducts={totalProducts} totalOrders={totalOrders} />;
};

export default RightDB;
