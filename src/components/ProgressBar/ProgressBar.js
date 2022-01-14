import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ simulation }) => {
  // console.log(simulation);
  const { tax, amount } = simulation;
  console.log(tax, amount);
  return (
    <>
      <div className="subtitleSimulation">
        <p className="subtitleSimulationTitle">Você Recebe</p>
        <p className="subtitleSimulationTitle">Taxas</p>
      </div>
      <div className="progressBarContainer">
        <div className="amountBar">
          <p className="simulationValue">USD {Math.round(amount)}</p>
        </div>
        <div className="taxBar">
          <p className="simulationValue">{tax * 100}%</p>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
