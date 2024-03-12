import { useState } from "react";
import MockProducts from "../Data/data";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(MockProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7); // Adjust the number of items per page here

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto px-4 py-8 text-lg">
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
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="text-xl font-bold mb-4 md:mb-0 md:mr-4">
          Product Page:
        </h2>
        <Link to={"/addproducts"}>
          <button className="py-2 px-4 bg-blue-500 mt-2 md:mt-0 rounded-lg text-lg text-white hover:bg-blue-600 transition duration-300 ease-in-out">
            Add Products
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="border-collapse border-2 border-black rounded-lg shadow-md w-full">
          <thead>
            <tr className="text-left">
              <th className="py-4 px-6 bg-blue-500 text-white">Name</th>
              <th className="py-4 px-6 bg-blue-500 text-white">Category</th>
              <th className="py-4 px-6 bg-blue-500 text-white">Price</th>
              <th className="py-4 px-6 bg-blue-500 text-white">Stock</th>
              <th className="py-4 px-6 bg-blue-500 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b-2 border-gray-300 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{product.name}</td>
                  <td className="py-3 px-6">{product.category}</td>
                  <td className="py-3 px-6">₹{product.price}</td>
                  <td className="py-3 px-6">{product.stockQuantity}</td>
                  <td className="py-3 px-6">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-500 focus:outline-none hover:text-red-700 transition duration-300 ease-in-out mr-2"
                      >
                        <FaTrash />
                      </button>
                      <Link
                        to={`/edit/${product.id}`}
                        className="text-blue-500 focus:outline-none hover:text-blue-700 transition duration-300 ease-in-out"
                      >
                        <FaEdit />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-3 px-6" colSpan="5">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav className="block mt-4">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {Array(Math.ceil(products.length / itemsPerPage))
            .fill()
            .map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-gray-100"
                  } font-semibold py-2 px-3 border border-gray-300 mr-1 mb-1 rounded`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Products;
