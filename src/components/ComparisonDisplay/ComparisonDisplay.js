import './ComparisonDisplay.css'

const ComparisonDisplay = ({ company, rate, amount, currency }) => {
  const formattedRate = (1 - rate)*100;
  const formattedAmount = amount.toFixed(2);

  return (
    <>
      <h2>{company}</h2>
      <div className="title-container">
          <span>Você recebe</span>
          <span>Taxas</span>
      </div>
      <div className='bar-container'>
          <progress value={`${formattedRate - 8}`} max='100'></progress>
          <div className="bar-values">
            <span>{`${currency} ${formattedAmount}`}</span>
            <span>{`${100 - formattedRate}%`}</span>
          </div>
      </div>
    </>
  )
}

export default ComparisonDisplay;
