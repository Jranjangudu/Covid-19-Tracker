import React, { useEffect, useState } from "react";
import { globaldata } from "./Axios";
import "./App.css";
import { allcountrie } from "./Axios";
import Carts from "./Component/Carts/Carts";

import Covid19 from "./Asserts/image.png";
import Charts from "./Component/Charts./Charts";

function Datacenter() {
  const [global, setglobal] = useState({});
  const [countrie, setcountrie] = useState([]);
  const [chartdata, setchartdata] = useState("Globally");
  // global data comes here and i call the globaldata(); function ;
  useEffect(() => {
    try {
      const globalApi = async () => {
        // why i use async await because the globaldata(); containe a promise ; you can't use await without async function ;
        const fetchdata = await globaldata();
        setglobal(fetchdata);
      };
      globalApi();
    } catch (error) {
      console.log(`unable to fetch  data ${error}`);
    }
  }, [setglobal]);
  const handlecountriename = async (country) => {
    const fetchdata = await globaldata(country);
    setchartdata(country);
    setglobal(fetchdata);
  };

  //allcountrie Name data comes here  and here i call allcountrie() function ;
  useEffect(() => {
    try {
      // why i use async await because the globaldata(); containe a promise ; you can't use await without async function ;
      const data = async () => {
        let respons = await allcountrie();
        setcountrie(respons.data.countries);
      };
      data();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!global.confirmed) {
    // here i use condition is global.confirmed is not define then bellow the code run it show Loading.... in webpage ;
    return (
      <>
        <span
          className="spinner-border spinner-border-sm ml-5 mt-3"
          role="status"
          aria-hidden="true"
        ></span>
        Loading.......
      </>
    );
  }
  // if  global.confirmed is render or valid not undefine then bellow code run and show all thinks in webpage ;
  return (
    <div className="App">
      <img
        src={Covid19}
        alt="covid-19 logo"
        width="250px"
        className="mb-3 mt-3 "
      />
      <br />
      {/* here i use onChange event that access the code that i click in webpage and return the value in  handlecountriename function as a parameter */}
      <select
        name=""
        onChange={(e) => handlecountriename(e.target.value)}
        className="selectbox shadow-lg  mb-3 bg-white "
      >
        <option value="Globally">Globally</option>
        {countrie.map((datalist, i) => {
          {
            /**here i use map function that helps to render all data in webpage (All country name ) */
          }
          return (
            <option key={i} name={datalist.name}>
              {datalist.name}
            </option>   
          )
        })}
      </select>
      <Carts Data={global} /> {/**Carts component calling here  */}
      <Charts countrie={global} city={chartdata} />
      {/**chaets component calling here  */}
    </div>
  );
}

export default Datacenter;
