import logo from "./logo.svg";
import React from 'react';
import Problem from "./components/Problem"
import "./App.css";
import { useEffect, useState } from "react";
import data1 from "./problems_all.json"
function App() {
const [easy, setEasy] = useState({});
const [medium, setMedium] = useState({});
const [hard, setHard] = useState({});
const [rand1,setRand1]=useState(0);
const [rand2,setRand2]=useState(0);
const [rand3,setRand3]=useState(0);
const getRandomNumber = (min, max) => {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
  return randomNumber;
};
const fetchData = () => {
  setEasy([]);setHard([]);setMedium([])
    data1.forEach((ev) => {
      const obj = Object.values(ev)[0];
      if (obj.specialTag === "Easy") {
        setEasy((prev) => [...prev, obj]);
      } else if (obj.specialTag === "Medium") {
        setMedium((prev) => [...prev, obj]);
      } else {
        setHard((prev) => [...prev, obj]);
      }
    });
    setRand1(getRandomNumber(1,easy.length));
    setRand2(getRandomNumber(1,medium.length));
    setRand3(getRandomNumber(1,hard.length));
    setEasy(easy[rand1])
    setMedium(easy[rand1])
    setHard(easy[rand1])
  };
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
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
      <button className="btn" onClick={fetchData}>Generate Problems</button>
    </div>
  );
}

export default App;
