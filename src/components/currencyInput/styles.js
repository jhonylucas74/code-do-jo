import styled from "styled-components";

export const InputWrap = styled.div`
  border: 1px solid;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border-color: ${(props) => (props.isZero ? "#FF5D5D" : "lightgray")};

  .currency {
    color: ${(props) => (props.isZero ? "#FF5D5D" : "#006ff2")};
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin-left: 5px;
  }

  input {
    border: none;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    outline: none;
    display: flex;
    align-items: center;
    color: #113366;
  }
`;
