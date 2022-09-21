import React from "react";
import mobile from "../assets/mobile.jpg";

const Secondpage = () => {
  return (
    <div className="second_section">

      <div className="second_first_section">
        <div>
        <h1 className="card_heading">Enjoy on your TV.</h1>
        <p className="card_description">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </p >
        </div>
        
        <img className="mob_img" src={mobile} alt="" />
      </div>

      <div className="second_second_section">
      <img className="mob_img" src={mobile} alt="" />
        <div>
        <h1 className="card_heading">Download your programmes </h1>
        <p className="card_description">
        Save your favourites easily and always have something to watch.
        </p>
        </div>
        
        
      </div>
      <div className="second_third_section">
        <div>
        <h1 className="card_heading">Watch everywhere.</h1>
        <p className="card_description">
        Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.
        </p>
        </div>
        
        <img className="mob_img" src={mobile} alt="" />
      </div>
    </div>
  );
};

export default Secondpage;
