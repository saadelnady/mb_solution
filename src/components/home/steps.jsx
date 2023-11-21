import React from "react";
import "../../styles/steps.css";
import stepsBackground from "../../images/bg_developer.png";
const Steps = () => {
  return (
    <div>
      <div className="special-heading">
        <h5>ONE STEP AHEAD</h5>
        <h2>Explore the creative process</h2>
        <p>
          Copy Passionate about solving problems through creative
          communications.
        </p>
      </div>
      <div className="steps-content">
        <img src={stepsBackground} alt="" />
        <div className="steps">
          <p>
            <span>01</span>
            Understand your requirements and the constrains.
          </p>
          <p>
            <span>02</span>
            Gather data, facts, thoughts, views, opinions and constrain.
          </p>
          <p>
            <span>03</span>
            All projects are participative and supportive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
