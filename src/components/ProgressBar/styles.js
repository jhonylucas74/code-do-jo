import styled from "styled-components";

export const SubtitleSimulation = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;

  p {
    margin: 2px 0;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-items: center;
  width: 100%;
  opacity: ${(props) => (props.isZero ? "0.5" : "1")};
`;

export const ProgressBarStyle = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 19.12px;
  background: ${(props) => (props.width ? "#ff5d5d" : "#006ff2")};
  border-radius: 10px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "auto")};
  justify-content: ${(props) => (props.marginLeft ? "center" : "auto")};

  p {
    height: 14px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    margin: 0 5px;
  }
`;
