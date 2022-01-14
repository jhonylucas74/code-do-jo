import styled from "styled-components"

export const Input = styled.input`
  width: 75%;
  height: 22px;
  border: none;
  border-radius: 5px;
  border: 2px solid #D8D8D8;
  font-size: 14px;
  padding-left: 60px;
  position: relative;

  &:focus {
    border: 2px solid #006FF2;
    outline: none;
  }
`

export const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  left: 20px;
  bottom: 4px;
  z-index: 9;

  &:focus {
    border: 2px solid #006FF2;
    color: #006FF2;
  }
`

export const Div = styled.div`
  position: relative;
`
