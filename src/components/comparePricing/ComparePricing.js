import { useState, useEffect } from 'react'
import PrincingService from '../../services/PricingService'
import CurrencyInput from '../currencyInput/CurrencyInput'
import ReceivingBar from '../ReceivingBar/ReceivingBar'
import './ComparePricing.css'

const pricing = new PrincingService()

const ComparePricing = () => {
	const [amount, setAmount] =	useState(5000)
  const [bank, setBank] = useState('')
  const [remessa, setRemessa] = useState('')
 
	useEffect(() => {
    pricing.simulate(amount).then(res => {
      setBank(res.bank)
      setRemessa(res.remessa)
    })
	}, [amount])

  if (bank && remessa) return (
    <div className="compare-pricing">
      <CurrencyInput value={amount} onChange={setAmount} />
      <ReceivingBar
        institutionName="Bancos tradicionais"
        amount={ bank.amount }
        tax={ bank.tax }
      />
      <ReceivingBar
        institutionName="Remessa Online"
        amount={ remessa.amount}
        tax={ remessa.tax }
      />
    </div>
  )
return (<p>Loading..</p>)
}

export default ComparePricing
