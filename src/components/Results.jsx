import React from "react";
import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initalInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].annualInvestment -
    resultsData[0].interest;
  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th className="thead">year</th>
          <th className="thead">investment value</th>
          <th className="thead">interest (year)</th>
          <th className="thead">total interest</th>
          <th className="thead"> invested Captial</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((investment) => {
          const totalIntreset =
            investment.valueEndOfYear -
            investment.annualInvestment * investment.year -
            initalInvestment;
            const totalAmountInvested=investment.valueEndOfYear-totalIntreset
          return (
            <tr>
              <td> {investment.year}</td>
              <td>{formatter.format(investment.valueEndOfYear)}</td>
              <td>{formatter.format(investment.interest)}</td>
              <td>{formatter.format(totalIntreset)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
