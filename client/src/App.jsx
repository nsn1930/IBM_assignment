import { useState, useEffect} from 'react'
import './App.scss'

function App() {

  const [comSymbol, setComSymbol] = useState([{}])
  const [company, setCompany] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:5000/api')
    .then(res => res.json())
    .then(data => setCompany(data.apiData))
  }, [])
  
  useEffect(() => {
    fetch('http://localhost:5000/symbolSearch')
    .then(res => res.json())
    .then(data => setComSymbol(data.symbolData.result[0].symbol))
  }, [])

  console.log(comSymbol)

  return (
    <>
      <input type="text" />
      <div>
        <p>{company.name}</p>
        <p>{company.country}</p>
        <p>{company.currency}</p>
        <p>{company.weburl}</p>
      </div>
      <button type="button" className="btn btn-outline-danger">Primary</button>
    </>
  );
}

export default App;