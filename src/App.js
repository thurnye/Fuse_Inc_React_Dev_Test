import axios from 'axios'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import services from './config/services'
import {cryptoActions} from './store/cryptoSlice'
import Home from './components/home'
import Coin from './components/singleCrypto'
import Header from './components/header'
import './App.css';

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    axios.request(services).then(function (response) {
      dispatch(cryptoActions.addCryptos({
        cryptoCoins: response.data
      }))

    }).catch(function (error) {
      console.error(error);
    });
  })
  

  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/currency/"  component={Coin} />
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
