import { useEffect, useState } from "react";
import "./Problem.css"
const Problem=(props)=>{
  console.log(props.data)
    return <>
        <div className="card" id={props.data.specialTag}>
          <div className="card-body">
            <h5 className="card-title">{props.data.quesName}</h5>
            <a href={props.data.quesLink} target="blank">
              <h6 className="card-subtitle mb-2 text-muted easy">Link</h6>
            </a>
            <div className="tags">
              {props.data.tags.map((data)=>(
                <div className="tag">
                <span>{data}</span>
               </div>
              ))}
            </div>
          </div>
        </div>
    </>
}
export default Problem;