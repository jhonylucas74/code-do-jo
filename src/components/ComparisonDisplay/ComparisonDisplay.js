import './ComparisonDisplay.css'
import { ProgressBar } from './ProgressBar';

const ComparisonDisplay = ({ company, rate, amount, currency }) => {
  const formattedRate = rate*100;
  const formattedAmount = amount.toFixed(2);

  return (
    <div className='comparison-display-container'>
      <h4>{company}</h4>
      <div className="title-container">
          <span>Você recebe</span>
          <span>Taxas</span>
      </div>
      <ProgressBar barWidth={formattedRate}>
        <div className='blue-bar'>{`${currency} ${formattedAmount}`}</div>
        <div className='red-bar'>{`${formattedRate.toFixed(0)}%`}</div>
      </ProgressBar>
    </div>
  )
  
}

export default ComparisonDisplay;
