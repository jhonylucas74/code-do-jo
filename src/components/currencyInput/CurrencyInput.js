import * as S from './currencyInputStyle';

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

const handleChange = (onChange, e) => {
  onChange(moneyToValue(e.target.value))
}

const CurrencyInput = ({ value, onChange, ...props }) => {
	return (
    <>
      <span> Você envia</span> <br /><br />
      <S.Div>
        <S.InputLabel htmlFor="amountValue">
          BRL
        </S.InputLabel><br /><br />
          <S.Input
            {...props}
            value={valueToMoney(value)}
            // onChange={e => onChange(moneyToValue(e.target.value))}
            onChange={e => handleChange(onChange, e)}
            id="amountValue"
          />
      </S.Div>
    </>
  );
}

export default CurrencyInput