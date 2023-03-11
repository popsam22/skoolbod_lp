import React from "react";
import "./SocialProof.css";
import {
  wexford,
  praise,
  alhamid,
  gloriousgate,
  paragon,
} from "../../constants/images";

const SocialProof = () => {
  return (
    <div className="app__socialproof">
      <div className="app__socialproof-h1">
        <h1>Trusted by more than 5,000 students nationwide</h1>
      </div>
      <div className="app__socialproof-logos">
        <div>
          <img src={wexford} alt="wexford" />
        </div>
        <div>
          <img src={paragon} alt="paragon" />
        </div>
        <div>
          <img src={praise} alt="praise" />
        </div>
        <div>
          <img src={gloriousgate} alt="gloriousgate" />
        </div>
        <div>
          <img src={alhamid} alt="alhamid" />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
