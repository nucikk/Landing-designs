/* eslint-disable no-unused-vars */
import React from "react";
import "../style/discover.css";
import Rectangle1 from "../Image/Rectangle 1.png"
import Rectangle2 from "../Image/Rectangle 2.png"
import Rectangle3 from "../Image/Rectangle 3.png"
import Rectangle4 from "../Image/Rectangle 4.png"
import Rectangle5 from "../Image/Rectangle 5.png"
import Rectangle6 from "../Image/Rectangle 6.png"
import Rectangle7 from "../Image/Rectangle 7.png"
import Rectangle8 from "../Image/Rectangle 8.png"


const Discover = () => {
  return (
    <div className="discover">
      <div className="discover_container">
        <div className="discover_info">
         <h2 className="discover_title">Discover the beauty around the world</h2>
         <p className="discover_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis beatae illo a laborum, eligendi atque debitis excepturi neque, nostrum incidunt fuga.</p>
          <button className="discover_btn">Explore</button>
        </div>
      </div>

      <div className="discover_img_box">

    <img src={Rectangle1}/> 
    <img src={Rectangle2}/> 
    <img src={Rectangle3}/> 
    <img src={Rectangle4}/> 

    <img src={Rectangle5}/> 
    <img src={Rectangle6}/> 
    <img src={Rectangle7}/> 
    <img src={Rectangle8}/> 
      </div>
    </div>
  );
};

export default Discover;
