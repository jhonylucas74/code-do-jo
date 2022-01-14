import { useState, useEffect } from 'react'
import PrincingService from '../../services/PricingService'
import CurrencyInput from '../currencyInput/CurrencyInput'
import ComparisonDisplay from '../ComparisonDisplay/ComparisonDisplay'
import './ComparePricing.css'

const pricing = new PrincingService()

const ComparePricing = () => {
	const [amount, setAmount] =	useState(5000)
  const [simulation, setSimulation] = useState('')
 
	useEffect(() => {
    pricing.simulate(amount).then(res => {
      setSimulation(res)
    })
	}, [amount])

  return (
    <div className="compare-pricing">
      <CurrencyInput value={amount} onChange={setAmount} />
      <hr/>
      { simulation && (
        <>
          <ComparisonDisplay  currency="USD" company="Bancos Tradicionais" rate={simulation.bank.tax} amount={simulation.bank.amount} />
          <hr/>
          <ComparisonDisplay currency="USD" company="Remessa Online" rate={simulation.remessa.tax} amount={simulation.remessa.amount} />
        </>
      )}
    </div>
  )
}

export default ComparePricing