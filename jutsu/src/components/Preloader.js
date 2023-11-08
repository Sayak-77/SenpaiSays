import React from "react";
import '../style/preloaderstyles.css';

const Preloader = () => {
  return (
    <>
    <div className="preloader-container">
    <span class="loader"></span>
    </div>
    <div className="pretext"><h1>Please Wait till your Suggestions are Ready!!</h1></div>
    </>
  );
};

export default Preloader;