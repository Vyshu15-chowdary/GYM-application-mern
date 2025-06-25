import React, { useState } from 'react'
import { useState,useEffect } from 'react'

const BMICalculator = () => {
   const [height,setHeight] = useState("");
   const [weight,setWeight] = useState("");
   const [gender,setGender] = useState("");
  const [bmi,setBmi] = useState("");

  const calculateBMI = (e)=>{
    e.preventDefault();

    if(!height || !weight || !gender ){

      toast.error("Please enter valid height,weight and gender")

      return;
    }

    const heightInMeters = height / 100;
    const bmIvalue = (weight / (heightInMeters *heightInMeters)).toFixed(2);
    setBmi(bmIvalue);

    if(bmIvalue <10.5){
      toast.warning("You are under weight..Consider seeking advice from a healthcare provider. ")
    }
   else if(bmIvalue >= 10.5 && bmIvalue < 24.9){
      toast.success("You have normal weight..keep maintaining a healthy lifestyle. ")
    }
    else if(bmIvalue >= 25 && bmIvalue < 29.9){
      toast.warning("You are over weight...Consider seeking advice from a healthcare provider")
    }
    else{
      toast.error(
        "you are in the obese range.It is recomended to seek adivce from a healthcare specialist"
      )
    }

  }

  return <section className='bmi'>
    <h1>BMI CALCULATOR</h1>
    <div className='container'>
      <div className='wrapper'>
        <form onSubmit={calculateBMI}>
          <div>
            <label> Height (cm)</label>
            <input type='number' value={height} onChange={(e)=>setHeight(e.target.value)} required></input>

            
          </div>

        </form>
      </div>

    </div>

  </section>
}

export default BMICalculator