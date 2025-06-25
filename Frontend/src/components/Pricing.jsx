import React from 'react'
import {check, Link} from "lucide-react"

const Pricing = () => {
  const pricing = [
    {
      imgUrl : "/pricing.webp",
      title:"QUATERLY",
      price : 18000,
      length : 3
    },

     {
      imgUrl : "/pricing.webp",
      title:"HALF_YEARLY",
      price : 34000,
      length : 6
    },

     {
      imgUrl : "/pricing.webp",
      title:"YEARLY",
      price : 67000,
      length : 12
    }
  ]
  return (
    <>
    <section className='pricing'>
      <h1>ELEVATE FITNESS GYM PLANS</h1>
     <div className='wrapper'>
      {

        pricing.map(element =>{
          return(
            <div className='card' key = {element.title}>
              <img src ={element}  alt={element.title} />
              <div className='title'>
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h1>Rs{element.price}</h1>
                <p>For {element.length}</p>

              </div>
              <div className="description">
                <p>
                  <check/>Equipment
                </p>

                <p>
                  <check/>All Day Free Training
                </p>

                <p>
                  <check/>Free Restroom
                </p>

                <p>
                  <check/>24/7 Skilled Support
                </p>

                <p>
                  <check/>20 Days Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>

              </div>
          )
        })
      }


     </div>
     
    </section>
    </>
    
  )
}

export default Pricing