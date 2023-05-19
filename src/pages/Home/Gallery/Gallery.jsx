import React, { useEffect } from "react";
import "aos/dist/aos.css";
import pic1 from "../../../assets/Gallery/gallery1.jpg";
import pic2 from "../../../assets/Gallery/gallery2.jpg";
import pic3 from "../../../assets/Gallery/gallery3.jpg";
import pic4 from "../../../assets/Gallery/gallery4.jpg";
import pic5 from "../../../assets/Gallery/gallery5.jpg";
import pic6 from "../../../assets/Gallery/gallery6.jpg";
import pic7 from "../../../assets/Gallery/gallery7.jpg";
import pic8 from "../../../assets/Gallery/gallery8.jpg";
import pic9 from "../../../assets/Gallery/gallery9.jpg";
import pic10 from "../../../assets/Gallery/gallery10.jpg";
import Aos from "aos";

const Gallery = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            easing: "ease-in-out-back",
            once: true,
            mirror: false,
        });
        Aos.refresh();
    }, []);

  const images = [
    { id: 1, src: pic1, alt: "Image 1" },
    { id: 2, src: pic2, alt: "Image 2" },
    { id: 3, src: pic3, alt: "Image 3" },
    { id: 4, src: pic4, alt: "Image 4" },
    { id: 5, src: pic5, alt: "Image 5" },
    { id: 6, src: pic6, alt: "Image 6" },
    { id: 7, src: pic7, alt: "Image 7" },
    { id: 8, src: pic8, alt: "Image 8" },
    { id: 9, src: pic9, alt: "Image 9" },
    { id: 10, src: pic10, alt: "Image 10" },
  ];

  return (
    <section className="gallery-section px-2 lg:px-0 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <p className="text-xl font-medium text-center mb-8">Our valuable customers with their superhero outfit and they competed in our most excited event in this year.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
