import axios from 'axios'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import './App.css';
import Home from './components/home'
import {cryptoActions} from './store/cryptoSlice'


function App() {

  const dispatch = useDispatch()


  const options = {
    method: 'GET',
    param: 'coins',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
      'x-rapidapi-key': '74a217fafcmsh976e97a31530a44p1f4bd1jsne0efc121be88',
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    axios.request(options).then(function (response) {
      dispatch(cryptoActions.addCryptos({
        cryptoCoins: response.data
      }))

    }).catch(function (error) {
      console.error(error);
    });
    return () => {
      
    }
  })
  


  return (
    <div className="App">
      <Home/>

    </div>
  );
}

export default App;
