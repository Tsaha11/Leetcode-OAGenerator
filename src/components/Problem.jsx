import { useEffect, useState } from "react";
import "./Problem.css"
const Problem=(props)=>{
  const [tags,setTags]=useState([]);
  const [title,setTitle]=useState([]);
  const getRandomNumber = (min, max) => {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
    return randomNumber;
  };
  useEffect(()=>{
    const randNum = getRandomNumber(1,500);
    setTitle(props.data[randNum])
    // setTags(props.data[randNum].tages)
  })
    return <>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted easy">Card subtitle</h6>
            <div className="tags">
              <div className="tag">
                <span>DP</span>
              </div>
              <div className="tag">
                <span>String</span>
              </div>
              <div className="tag">
                <span>Array</span>
              </div>
              <div className="tag">
                <span>Bits</span>
              </div>
            </div>
          </div>
        </div>
    </>
}
export default Problem;