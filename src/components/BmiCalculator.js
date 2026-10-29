import React, { useState } from 'react'
import Style from "./Bmi.module.css";

const Bmi = () => {
    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [value,setValue] = useState("");
    const [result,setResult] = useState("");
    const [show,setShow] = useState(false);

  const handleSubmit = (e) =>{
    console.log("asim");
      e.preventDefault();
      const valueBmi = (weight * 703) / (height * height);
      setValue(valueBmi);
     if (valueBmi < 18.5) {
      setResult("Underweight");
    } else if (valueBmi < 25) {
      setResult("Normal weight");
    } else if (valueBmi < 30) {
      setResult("Overweight");
    } else {
      setResult("Obese");
    }
    setShow(true);
  }

  const handleReload = () =>{
    setValue("");
    setResult("");
  }
  return (
    <div className={Style.container}>
        <h1>BMI Calculator</h1>
        <div className={Style.containerform}>
          <p>Weight (ibs)</p>
          <input type='number' placeholder='enter your weight' value={weight} onChange={(e)=>{ setWeight(e.target.value)}}></input>
          <p>Height (in)</p>
          <input type='number' placeholder='enter your height'  onChange={(e)=>{ setHeight(e.target.value)}}></input>
          <div className={Style.containerbutton}>
             <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReload}>Reload</button>
          </div>
        </div>
      {show===true ? <h3>Your BMI is: {value} </h3>   :""}
        {show===true ? 
        <p>your are {result}</p>
        :""}
    </div>
  )
}

export default Bmi