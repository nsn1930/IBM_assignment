import {  useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    axios.get('http://localhost:5000/api')
    .then(res => {
      setBackendData(res.data)
    })
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App;