import { useEffect, useState } from "react";
import "./Problem.css"
const Problem=(props)=>{
  const [prob,setProb]=useState({});
  const [rand,setRand]=useState(0);
  const getRandomNumber = (min, max) => {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
    return randomNumber;
  };
  useEffect(()=>{
    setProb(props.data[0])
    const rand=getRandomNumber(0,props.data.length+1);
    setRand(rand)
  },[props.data])
  return <>
        {props.data.length>0 && <div className="card" id={props.data[rand].specialTag}>
            <a href={props.data[rand].quesLink} target="blank">
          <div className="content">
            <h5 className="title">{props.data[rand].quesName}</h5>
            <div className="tags">
              {props.data[rand].tags.map((data)=>(
                <div className="tag">
                <span>{data}</span>
               </div>
              ))}
            </div>
          </div>
            </a>
        </div>}
    </>
}
export default Problem;