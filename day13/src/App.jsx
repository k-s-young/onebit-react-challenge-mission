import './App.css'
import { useState } from 'react'

const CurrentInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

const KRW_TO_USD_RATE = 1300;

function App() {
  const [amount, setAmount] = useState({
    krw: 0,
    usd: 0,
  });

  const { krw, usd } = amount;

  const onChangeKrw = (value) => {
    setAmount({
      krw: value,
      usd: value / KRW_TO_USD_RATE,
    });
  }
  const onChangeUsd = (value) => {
    setAmount({
      krw: value * KRW_TO_USD_RATE,
      usd: value,
    });
  }
  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <div>
        <CurrentInput label="KRW" value={krw} onChange={onChangeKrw} />
        <CurrentInput label="USD" value={usd} onChange={onChangeUsd} />
      </div>
    </>
  )
}

export default App
