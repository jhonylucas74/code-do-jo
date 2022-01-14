// import "./CurrencyInput.css"
import { useState, useEffect } from "react";
const moneyformatter =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const valueToMoney = value => {
  return moneyformatter
    .format(value)
    .replace('R$', '')
}

const moneyToValue = money => {
  return (parseFloat(money
    .replace(',', '.')
    .replaceAll('.', '')
  ) || 0) / 100;
}

const CurrencyInput = ({ value, onChange, ...props }) => {
  const [borderColor, setBorderColor] = useState('#D8D8D8')

  const handleError = () => {
    if(!value){
      setBorderColor('#FF5D5D')
    }
  }

  const divStyle = {
    height: '32px',
    width: '237px',
    borderRadius: '4px',
    border: `1px solid ${borderColor}`,
  };

  useEffect(()=>{
    handleError()
  })

	return (
    <input
      {...props}
      value={valueToMoney(value)}
      onChange={e => onChange(moneyToValue(e.target.value))} 
      style={divStyle}
    />
  );
}

export default CurrencyInput