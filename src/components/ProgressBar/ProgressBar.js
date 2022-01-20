import React from "react";

import {
  ProgressBarContainer,
  ProgressBarStyle,
  SubtitleSimulation,
} from "./styles";

const ProgressBar = ({ simulation, isZero }) => {
  const { tax, amount } = simulation;
  const toPercentage = `${tax * 300}%`;

  return (
    <>
      <SubtitleSimulation>
        <p>Você Recebe</p>
        <p>Taxas</p>
      </SubtitleSimulation>
      <ProgressBarContainer isZero={isZero}>
        <ProgressBarStyle>
          <p>USD {Math.round(amount)}</p>
        </ProgressBarStyle>
        <ProgressBarStyle width={toPercentage} marginLeft={`-${toPercentage}`}>
          <p>{Math.round(tax * 100)}%</p>
        </ProgressBarStyle>
      </ProgressBarContainer>
    </>
  );
};

export default ProgressBar;
