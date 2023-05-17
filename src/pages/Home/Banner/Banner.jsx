import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <section className="banner-section bg-gray-100 py-10">
      <div className="container mx-auto flex lg:flex-row-reverse gap-5">
        <div className="w-1/2 my-20 mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Get Ready for Epic Adventures with Awesome Action Figures for Your
            Kids!
          </h1>
          <h2 className="text-2xl mb-8">
            Unleash your imagination and save the day with our incredible
            collection of action-packed heroes!
          </h2>
          <div className="text-center">
            <Link>
              <button className="btn btn-error py-2 px-6 inline-block">Explore Now</button>
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <img src={banner} alt="Action Figures" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
