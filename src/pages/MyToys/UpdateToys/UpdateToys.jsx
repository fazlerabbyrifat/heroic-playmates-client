import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateToys = () => {
  const myToy = useLoaderData();
  const navigate = useNavigate();

  const [name, setName] = useState(myToy.name);
  const [price, setPrice] = useState(myToy.price);
  const [quantity, setQuantity] = useState(myToy.quantity);
  const [description, setDescription] = useState(myToy.description);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const updatedToy = {
      name,
      price,
      quantity,
      description
    };

    try {
      const response = await fetch(`https://heroic-playmates-server.vercel.app/allToys/${myToy._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedToy)
      });

      if (response.ok) {
        navigate(-1);
      } else {
        console.error('Failed to update toy');
      }
    } catch (error) {
      console.error('Error updating toy:', error);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Update Toy</h1>
      <form className="w-1/2 mx-auto" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">
            Toy's Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-lg font-medium">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-lg font-medium">
            Available Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            cols="50"
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default UpdateToys;
