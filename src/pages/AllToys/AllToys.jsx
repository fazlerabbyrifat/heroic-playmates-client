import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ToysData from "./ToysData";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://localhost:5000/allToys?search=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [searchQuery]);

  const handleViewDetails = (id) => {
    if (user) {
      navigate(`/allToys/${id}`);
    } else {
      toast.error("You have to log in first to view details");
      setTimeout(() => {
        navigate("/login", { state: { from: location, toyId: id }, replace: true });
      }, 2000);
    }
  };

  const handleSearchByName = (event) => {
    event.preventDefault();
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-5 text-center">All Toys</h1>
      <div className="mx-auto w-max">
        <input
          type="text"
          placeholder="Search by Toy Name"
          onChange={handleSearchByName}
          className="p-2 mb-4"
        />
        <button className="btn btn-accent ml-3">
          <FaSearch></FaSearch>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full mx-2">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <ToysData
                key={toy._id}
                toy={toy}
                index={index}
                handleViewDetails={handleViewDetails}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
