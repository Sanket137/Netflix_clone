import React from "react";


const Mainpage = () => {
  return (
    <div className="frontpage">
        

      <div className="navbar-des ">
        <div className="d-flex justify-content-between">
          <a>
            <h1 className="logo">SCREENFLIX</h1>
          </a>
          <a href="#">
            <button className="sign_in_btn">Sign in</button>
          </a>
        </div>
      </div>

      <div className="maindiv">
        
        <div className="text_div">
          <h1>Unlimited films, TV programmers and more</h1>
          <p>Watch anywhere. Cancel at anytime</p>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
        </div>
        <div>
          <input className="email_input" placeholder="Email address" type="text" name="" id="" />
          <button className="get_start_btn">Get Started </button>
        </div>
      </div>
      
    </div>
  );
};

export default Mainpage;
