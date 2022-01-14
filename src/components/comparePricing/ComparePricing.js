import { useState, useEffect } from 'react'
import PrincingService from '../../services/PricingService'
import CurrencyInput from '../currencyInput/CurrencyInput'
import TransferInfo from '../transferInfo/transferInfo'
import './ComparePricing.css'

const pricing = new PrincingService()

const ComparePricing = () => {
	const [amount, setAmount] =	useState(5000)
  const [simulation, setSimulation] = useState({})

	useEffect(() => {
    pricing.simulate(amount).then(res => {
      setSimulation(res)
    })
	}, [amount])

  return (
    <div className="compare-pricing">
      <div className='compare-pricing__input'>
        Você envia
        <CurrencyInput value={amount} onChange={setAmount} />
      </div>
      <TransferInfo
        bankType={"Bancos Tradicionais"}
        amount={simulation.bank?.amount.toFixed(2)}
        tax={Math.round(simulation.bank?.tax * 100)}
      />
      <TransferInfo
        bankType={"Remessa Online"}
        amount={simulation.remessa?.amount.toFixed(2)} 
        tax={Math.round(simulation.remessa?.tax * 100)}
      />
    </div>
  )
}

export default ComparePricing