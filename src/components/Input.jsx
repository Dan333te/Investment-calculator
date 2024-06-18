import React from "react";
// import { useState } from "react";

const UserInput = ({onChange,userInputs}) => {
 
//  console.log(userInputs)
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initalInvestment">initial investment</label>
          <input
            id="initialInvestment"
            value={userInputs.initialInvestment}
            onChange={onChange}
            type="number"
            required
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annual investment</label>
          <input
            id="annualInvestment"
            value={userInputs.annualInvestment}
            onChange={onChange}

            type="number"
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected return</label>
          <input
            id="expectedReturn"
            value={userInputs.expectedReturn}
            onChange={onChange}

            type="number"
            required
          />
        </p>

        <p>
          <label htmlFor="duration">duration</label>
          <input
            id="duration"
            value={userInputs.duration}
            onChange={onChange}

            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
