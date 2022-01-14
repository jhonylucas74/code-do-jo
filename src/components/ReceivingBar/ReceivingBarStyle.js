import styled from 'styled-components'

const MULTIPLIER = 3;

export const Container = styled.div`
  display: flex;
  background: blue;
  border-radius: 6px;
  width: 100%;
  height: 19px;
  justify-content: space-between;
`
export const AmountBar = styled.div`
  width: ${(props) => `${(1 - props.tax) * 100}%`};
  background: blue;
  border-radius: 6px;
  color: white;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`

export const TaxBar = styled.div`
  width: ${(props) => `${(props.tax * 100) * MULTIPLIER}%`};
  min-width: 14%;
  border-radius: 6px;
  background: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  pading: 5px 10px;
  transition: .5s all;
`

export const DescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 12px;
    margin-bottom: 5px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  p {
    margin-bottom: 7px;
  }
`