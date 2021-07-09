import {useSelector} from 'react-redux'
import { useLocation } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import {Line} from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    flexGrow: 1,
    margin: '15px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function SingleCrypto() {
  const classes = useStyles();

   const location = useLocation()
   const coinId = location.state.coinId
  
  const cryptoCoins = useSelector(state => state.cryptos.cryptoData.data)

  // get SingleCoin
  let coin,
      graphData,
      high,
      desc,
      low;

  if (cryptoCoins !== undefined){
    coin = cryptoCoins.coins.find(({id}) => id === coinId)

    
    const prices = coin.history.map(el => Number(el))
    low = (Math.min(...prices).toLocaleString('en-US', {style: 'currency',currency: 'USD'}))
    high = (Math.max(...prices).toLocaleString('en-US', {style: 'currency',currency: 'USD'}))

    graphData = {
      labels: [...Array(coin.history.length).keys()],
      datasets: [
        {
          label: `${coin.name} Coin Chart`,
          responsive: true,
          fill: false,
          lineTension: 0.5,
          backgroundColor: coin.color,
          pointRadius: 0,
          pointBorderColor: coin.color,
          padding: 0,
          borderWidth: 2,
          data: coin.history
        }
      ]
    }
    
   

// p.outerHTML = p.outerHTML.replace(/[><]['"]+[><]/g, '');


  }
  console.log(coin)
  const handleClick = (e) => {
    // console.log(e.target.innerHTML.replace(/[><]['"]+[><]/g, ))
  }
 

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {coin && (<> 
          <Grid item xs={5}>
            <section>
              <div className="coin-head">
                <Avatar aria-label="recipe" className={classes.avatar} style={{backgroundColor: 'white'}}>
                  <img src={coin.iconUrl} alt={coin.symbol} style={{width: `50px`, height: '50px'}}/>
                </Avatar>
                <div className="single-coin-names">
                  <h1><strong>{coin.name}</strong></h1>
                  <h5>{coin.symbol}</h5>
                </div>
              </div>
              
              <div className="rank-type">
                <h4>Rank #{coin.rank}</h4>
                <h4>{coin.type}</h4>
              </div>

              <div >
                <ul className="links">
                 {coin.links.map(el => {
                   return (
                    <li key={el.name}>
                    <a href={el.url} target="_blank" rel="noReferrer">{el.name}</a>
                  </li>
                   )
                 })}
                  
                </ul>

              </div>
              </section>
          </Grid>

          <Grid item xs={7}>
            <section>
              <div>
                <p style={{marginBottom: '0'}}><small>{coin.name} Price ({coin.symbol})</small></p>
                <div className="coin-price">
                  <h1 style={{marginTop: '0'}}>{(Number(coin.price)).toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                  </h1>
                  <h1 className={coin.change > 0 ? "increase" : "decrease"}>{coin.change}%</h1>
                </div>
                <div className="low-high">
                  <p><span>Low: <span><strong>{low}</strong></span></span></p>
                  <p><span>High: <span><strong>{high}</strong></span></span></p>
                </div>
                
              </div>

            <div>
              <h1>{coin.symbol} Price Statistics</h1>
              <div className="coin-statistics">

                <div className="coin-stats-value">
                  <p><small>Market Cap</small></p>
                  <p className="figures"><small><strong>{(coin.marketCap).toLocaleString('en-US', {
                        style: 'currency',
                        currency: cryptoCoins.base.symbol,
                      })}</strong></small></p>
                </div>

                <div className="coin-stats-value">
                  <p><small>Volume 24h</small></p>
                  <p className="figures">
                    <small>
                      <strong>{(coin.volume).toLocaleString('en-US', {
                          style: 'currency',
                          currency: cryptoCoins.base.symbol,
                        })}
                      </strong>
                    </small>
                  </p>
                  <p><small>Volume / Market Cap</small></p>
                  <p className="figures"><small><strong>{parseFloat((coin.volume/coin.marketCap).toFixed(5))}</strong></small></p>
                </div>

                <div className="coin-stats-value">
                  <p><small>Circulating Supply</small></p>
                  <p className="figures">
                    <small>
                      <strong>{(coin.volume).toLocaleString('en-US')} {coin.symbol}</strong>
                    </small>
                  </p>
                  <p><small>Total Supply</small></p>
                  <p className="figures"><small><strong>{(coin.totalSupply).toLocaleString('en-US')}</strong></small></p>
                </div>
              </div>
            </div>
            </section>
            
          </Grid>
          <section className="other-data" >
            <div className="coin-graph">
              {/* {coin.description} */}
              <Line
                      data={graphData}
                      options={{
                        title:{
                          display:true,
                          text:'Average Rainfall per month',
                          fontSize:20
                        },
                        legend:{
                          display:true,
                          position:'right'
                        }
                      }}
                    />

            </div>
            <div className="description">
            </div>
          </section>
        </>)}
      </Grid>
    </div>
  );
}


















