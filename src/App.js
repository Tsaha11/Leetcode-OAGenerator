import logo from "./logo.svg";
import React from 'react';
import Problem from "./components/Problem"
import "./App.css";
import { useEffect, useState } from "react";
import data1 from "./problems_all.json"
const  App=()=> {
  const [easy, setEasy] = useState([]);
  const [medium, setMedium] = useState([]);
  const [hard, setHard] = useState([]);

  const fetchData = () => {
    const e=[];const m=[];const h=[];
    data1.forEach((ev) => {
      const obj = Object.values(ev)[0];
      if (obj.specialTag === "Easy") {
        e.push(obj)
      } else if (obj.specialTag === "Medium") {
        m.push(obj)
      } else {
        h.push(obj);
      }
    });
    return [e,m,h];
  };
  const fetchHandler=()=>{
    console.log('sd')
    console.log(data1)
    const [e,m,h]=fetchData();
    setEasy(e);
    setMedium(m);
    setHard(h);
  }
  useEffect(() => {
    fetchHandler();
  }, []);


  return (
    <div className="App">
      {/* Header Code */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        {easy && <Problem data={easy} key={"easy"}/>}
        {medium && <Problem data={medium} key={"medium"}/>}
        {hard && <Problem data={hard} key={"hard"}/>}
      </div>
      <button className="btn" onClick={fetchHandler}>Generate Problems</button>
    </div>
  );
}

export default App;
