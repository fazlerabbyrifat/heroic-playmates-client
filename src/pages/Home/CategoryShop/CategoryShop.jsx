import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Rating from "react-rating-stars-component";
import { key } from "localforage";

const CategoryShop = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="category-section px-2 lg:px-0 py-10">
      <div className="text-center my-5 space-y-5">
        <h4 className="text-xl font-semibold">Category</h4>
        <h2 className="text-3xl font-bold">Our Categories</h2>
      </div>
      <Tabs>
        <TabList className="flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-4 mb-8">
          {categories.map((category, index) => (
            <Tab
              key={index}
              className={`p-4 tab ${
                activeTab === index ? "tab-active" : ""
              } text-xl font-bold`}
              onClick={() => handleTabClick(index)}
            >
              {category.category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {category.toys.map((toy) => (
                <div key={toy.id} className="card bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={toy.image} alt={toy.name} className="h-[320px]" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h3 className="text-xl font-semibold">{toy.name}</h3>
                    <p className="text-lg font-medium text-gray-500">
                      Price: ${toy.price}
                    </p>
                    <div className="flex items-center">
                      <Rating
                        value={toy.rating}
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                      />
                      <span className="ml-2">{toy.rating}</span>
                    </div>
                    <div className="card-actions">
                      <Link>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
};

export default CategoryShop;
