import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";

const MyToysData = ({ myToy, index, handleUpdateToysData, handleDeleteToy }) => {
  const { _id, name, image, price, quantity, category, description } = myToy;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="w-24 rounded-xl">
          <img src={image} />
        </div>
      </td>
      <td>{name}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>
        <button
          onClick={() => handleUpdateToysData(_id)}
          className="btn btn-accent btn-circle"
        >
          <FaEdit></FaEdit>
        </button>
        <button onClick={() => handleDeleteToy(_id)} className="btn btn-error btn-circle ml-2">
          <FaTimes></FaTimes>
        </button>
      </td>
    </tr>
  );
};

export default MyToysData;