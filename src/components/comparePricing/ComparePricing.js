import { useState, useEffect } from 'react'
import PrincingService from '../../services/PricingService'
import CurrencyInput from '../currencyInput/CurrencyInput'
import './ComparePricing.css'

const pricing = new PrincingService()

const ComparePricing = () => {
	const [amount, setAmount] =	useState(5000)
  const [simulation, setSimulation] = useState('')
 
	useEffect(() => {
    pricing.simulate(amount).then(res => {
      setSimulation(JSON.stringify(res))
    })
	}, [amount])

  return (
    <div className="compare-pricing">
      <CurrencyInput value={amount} onChange={setAmount} />
      <div>
        <code>{simulation}</code>
      </div>
    </div>
  )
}

export default ComparePricing