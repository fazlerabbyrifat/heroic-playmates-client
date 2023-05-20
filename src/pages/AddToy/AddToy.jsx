import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToy = {
      name,
      sellerName: user?.displayName,
      image: pictureUrl,
      email: user?.email,
      price,
      rating,
      quantity,
      description,
      category
    };
    fetch("http://localhost:5000/allToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Toys added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Add A Toy</h1>
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="picture_url" className="block text-lg font-medium">
            Picture URL:
          </label>
          <input
            type="text"
            id="picture_url"
            name="picture_url"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
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
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="seller_name" className="block text-lg font-medium">
            Seller Name:
          </label>
          <input
            type="text"
            id="seller_name"
            name="seller_name"
            defaultValue={user?.displayName}
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="seller_email" className="block text-lg font-medium">
            Seller Email:
          </label>
          <input
            type="email"
            id="seller_email"
            name="seller_email"
            defaultValue={user?.email}
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg font-medium">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="">Select Category</option>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
            <option value="Star Wars">Star Wars</option>
            <option value="Transformer">Transformer</option>
          </select>
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
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-lg font-medium">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
            step="0.1"
            className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
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
            required
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
            required
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

export default AddToy;
