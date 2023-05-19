import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Free Delivery",
      image:
        "https://img.freepik.com/free-vector/free-shipping-concept-illustration_114360-2308.jpg?w=996&t=st=1684504192~exp=1684504792~hmac=c2bafd82c904f8e90870ffdaae189ab7893e4b32300355375bc6880dd729ea4d",
      description:
        "We provided super fast free delivery systems for our customers",
    },
    {
      id: 2,
      name: "Guaranteed Refund Policy",
      image:
        "https://img.freepik.com/free-vector/chargeback-abstract-concept-illustration_335657-3904.jpg?w=740&t=st=1684504734~exp=1684505334~hmac=4fb7e6835c404231894dd07ff7b6b493b61f5b7a4d7c63d0d93599ef22e78256",
      description:
        "If there any defect found in our products, you can easily get refund or exchange your product",
    },
    {
      id: 3,
      name: "Payment Options",
      image:
        "https://img.freepik.com/free-vector/nfc-technology-concept-illustration_114360-14387.jpg?w=740&t=st=1684505325~exp=1684505925~hmac=12a7be6d7f29540536d5fdc79a782cab518b6e8cf777be74a41df563e43ec426",
      description:
        "You can easily pay us, we have all kinds of payment options available",
    },
  ];
  return (
    <div className="my-10 px-10">
      <div className="border-4 border-dashed w-40 mx-auto p-4">
        <h4 className="text-xl font-semibold text-center">Services</h4>
      </div>
      <h2 className="text-2xl text-center font-bold mt-4">
        We provided special services for our customers
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-100 p-6 rounded-lg shadow">
            <img
              src={service.image}
              alt={service.name}
              className="mx-auto h-56 mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-2">{service.name}</h3>
            <p className="text-lg font-medium text-gray-500 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
