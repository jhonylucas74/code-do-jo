import { useState, useEffect } from 'react'
import PrincingService from '../../services/PricingService'
import CurrencyInput from '../currencyInput/CurrencyInput'
import CompareTax from '../comparetax/CompareTax'
import './ComparePricing.css'

const pricing = new PrincingService()

const ComparePricing = ({sender, receiver}) => {
	const [amount, setAmount] =	useState(5000)
  const [simulation, setSimulation] = useState({"bank": {}, "remessa": {}})
 
	useEffect(() => {
    pricing.simulate(amount).then(res => {
      setSimulation((res))
    })
	}, [amount])

  return (
    <div className="compare-pricing">
      <span>{sender}</span>
      <CurrencyInput value={amount} onChange={setAmount} />
      <CompareTax title="Bancos tradicionais" receiver={receiver} amount={simulation.bank.amount} tax={simulation.bank.tax}/>
      <CompareTax title="Remessa Online" receiver={receiver} amount={simulation.remessa.amount} tax={simulation.remessa.tax}/>
    </div>
  )
}

export default ComparePricing