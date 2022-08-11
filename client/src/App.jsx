import {  useEffect} from 'react'
import './App.scss'

function App() {

  useEffect(() => {
    fetch('http://localhost:5000/api')
    .then(res => res.json())
    .then(data => {console.log(data.apiData)})
  }, [])

  return (
    <>
      {/* <div>
        {
          (typeof backendData.users === 'undefined') ? (<p>Loading...</p>) : (backendData.users.map((user, i) => <p key={i}>{user}</p>))
        }
      </div> */}
      <button type="button" className="btn btn-outline-danger">Primary</button>
    </>
  );
}

export default App;