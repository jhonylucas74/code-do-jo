import { useState, useEffect } from "react";
import PrincingService from "../../services/PricingService";
import CurrencyInput from "../currencyInput/CurrencyInput";
import "./ComparePricing.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const pricing = new PrincingService();

const ComparePricing = () => {
  const [amount, setAmount] = useState(5000);
  const [simulation, setSimulation] = useState("");

  useEffect(() => {
    pricing.simulate(amount).then((res) => {
      setSimulation(res);
    });
  }, [amount]);

  return (
    <div className="compare-pricing">
      <p className="title">Você envia </p>
      <CurrencyInput
        className="input_sender"
        value={amount}
        onChange={setAmount}
      />
      <div>
        <div className="container-progressbar">
          <p className="title">Bancos Tradicionais</p>
          <div>
            {simulation && <ProgressBar simulation={simulation.bank} />}
          </div>
        </div>

        <div div className="container-progressbar">
          <p className="title">Remessa Online</p>
          <div>
            {simulation && <ProgressBar simulation={simulation.remessa} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePricing;
