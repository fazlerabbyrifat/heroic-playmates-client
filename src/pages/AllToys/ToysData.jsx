import React from "react";

const ToysData = ({ toy, index, handleViewDetails }) => {
  const { _id, name, sellerName, image, price, quantity, category } = toy;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="w-24 rounded-xl">
          <img src={image} />
        </div>
      </td>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button
          className="btn btn-outline btn-accent"
          onClick={() => handleViewDetails(_id)}
        >
          View Details
        </button>
      </td>
    </tr>
  );
};

export default ToysData;
