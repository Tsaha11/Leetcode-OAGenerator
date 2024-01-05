import { useEffect, useState } from "react";
import "./Problem.css"
const Problem=(props)=>{
  console.log(props.data)
    return <>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{"title"}</h5>
            <a href={"link"}>
              <h6 className="card-subtitle mb-2 text-muted easy">Card subtitle</h6>
            </a>
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