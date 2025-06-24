import React from 'react'

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.webp",
    "/img5.webp",
    "/img6.jpg",
    "/img7.webp",
    "/img8.jpg"]
  return <section className='gallery'>
    <h1>BETTER BEATS BEST</h1>
    <div className='images'>
      <div>
        {
          gallery.slice(0,3).map((element,index) =>(
            <img key={index} src={element} alt="galleryImage"/>
          ))
        }
      </div>

       <div>
        {
          gallery.slice(3,6).map((element,index) =>(
            <img key={index} src={element} alt="galleryImage"/>
          ))
        }
      </div>

       <div>
        {
          gallery.slice(6,7).map((element,index) =>(
            <img key={index} src={element} alt="galleryImage"/>
          ))
        }
      </div>

    </div>

  </section>
}

export default Gallery