import "./currencyInput.css";

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
	return (
  	<input
      {...props}
      value={valueToMoney(value)}
      onChange={e => onChange(moneyToValue(e.target.value))} />
  );
}

export default CurrencyInput