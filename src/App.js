import './App.css';
import ComparePricing from './components/comparePricing/ComparePricing';

function App() {
  const isoCode = {
    sender: 'BRL',
    receiver: 'USD',
  }
  return (
    <div className="App">
      <ComparePricing sender={isoCode.sender} receiver={isoCode.receiver} />
    </div>
  );
}

export default App;
