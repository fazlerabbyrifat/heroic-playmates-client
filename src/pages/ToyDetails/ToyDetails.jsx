import React from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating-stars-component";
import "react-tabs/style/react-tabs.css";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    name,
    description,
    image,
    price,
    quantity,
    rating,
    sellerName,
    email,
  } = toy;
  const ratingValue = parseFloat(rating);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6 text-lg font-medium">{description}</p>
          <div className="space-y-5">
            <h4 className="text-xl font-semibold">
              Seller: <span className="text-green-400">{sellerName}</span>
            </h4>
            <h4 className="text-xl font-semibold">
              Seller Contact: <span className="text-error">{email}</span>
            </h4>
            <p className="text-lg font-medium">Price: $<span className="text-error">{price}</span></p>
            <p className="text-lg font-medium">Available products: {quantity}</p>
          </div>
          <div className="flex items-center">
            <Rating
              value={ratingValue}
              count={5}
              size={24}
              activeColor="#ffd700"
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
            />
            <span className="ml-2">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
