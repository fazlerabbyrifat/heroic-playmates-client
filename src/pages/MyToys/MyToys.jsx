import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysData from "./MyToysData";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://heroic-playmates-server.vercel.app/allToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user.email]);

  const handleSorting = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    fetch(`https://heroic-playmates-server.vercel.app/allToys?email=${user.email}&sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data)
      });
  };

  const handleUpdateToysData = (id) => {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to update this toy?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/myToys/update/${id}`);
      }
    });
  };

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://heroic-playmates-server.vercel.app/allToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toys has been removed.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-5 text-center">My Toys</h1>
      <div className="overflow-x-auto">
        <table className="table w-full mx-2">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>
                <div>
                  Price{" "}
                  <button onClick={handleSorting}>
                    {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
                  </button>
                </div>
              </th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myToys?.map((myToy, index) => (
              <MyToysData
                key={myToy._id}
                index={index}
                myToy={myToy}
                handleUpdateToysData={handleUpdateToysData}
                handleDeleteToy={handleDeleteToy}
              ></MyToysData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;