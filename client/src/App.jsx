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
    <>
      <div>
        {
          (typeof backendData.users === 'undefined') ? (<p>Loading...</p>) : (backendData.users.map((user, i) => <p key={i}>{user}</p>))
        }
      </div>
      <button type="button" className="btn btn-outline-danger">Primary</button>
    </>
  );
}

export default App;