import React from "react";
import { SocialIcon } from "react-social-icons";

function Social(props) {
  return (
    <div className="text-center position-fixed" style={{ left: "7%" }}>
      <div className="mb-3 social">
        <a href="/">
        <div className="social-div" style={{background:'rgba(253,195,0,1)'}}></div>
          <SocialIcon bgColor="rgba(253,195,0,1)" network="github" />
        </a>
      </div>
      <div className="mb-3 social">
        <a href="/">
        <div className="social-div" style={{background:'rgba(225,40,56,1)'}}></div>
          <SocialIcon bgColor="rgba(225,40,56,1)" network="upwork" />
        </a>
      </div>
      <div className="mb-3 social">
        <a href="/">
          <div className="social-div" style={{background:'rgba(32,175,189,1)'}}></div>
          <SocialIcon bgColor="rgba(32,175,189,1)" network="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Social;
