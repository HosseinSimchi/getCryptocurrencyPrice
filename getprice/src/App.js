import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  
  const [getData, setGetData] = useState(null);
  
  const URL_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'

  useEffect(() => {
    axios.get(URL_API)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}


export default App;
