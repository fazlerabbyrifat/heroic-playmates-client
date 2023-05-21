import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Rating from "react-rating-stars-component";
import Aos from "aos";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const CategoryShop = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://heroic-playmates-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out-back",
      mirror: false,
    });
    Aos.refresh();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleViewDetails = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      navigate('/');
    }
  };


  return (
    <section className="category-section px-2 lg:px-0 py-10">
      <div className="text-center my-5 px-10 space-y-5">
        <div className="border-4 border-dashed w-40 mx-auto p-4">
          <h4 className="text-xl font-semibold">Category</h4>
        </div>
        <h2 className="text-3xl font-bold">Our Categories</h2>
      </div>
      <Tabs>
        <TabList className="flex flex-col-reverse lg:flex-row justify-center lg:space-x-4 mb-8">
          {categories.map((category, index) => (
            <Tab
              key={index}
              className={`tab ${
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
                    <img
                      src={toy.image}
                      alt={toy.name}
                      className="h-[320px]"
                      data-aos="fade-up"
                    />
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
                    <button
                        className="btn btn-accent"
                        onClick={handleViewDetails}
                      >
                        View Details
                      </button>
                    </div>
                    <ToastContainer></ToastContainer>
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
