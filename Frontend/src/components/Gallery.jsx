import React from "react";

const Gallery = () => {
  const gallery = [
   "./img1.jpg",
   "./img2.jpg",
   "./img3.jpg",
   "./img4.webp",
   "./img5.webp",
   "./img6.jpg",
   "./img7.webp",
   "./img8.jpg",
   "./img9.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="img" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element}  alt="img" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt ="img"  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;