import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Line} from 'react-chartjs-2';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard() {

  const cryptoCoins = useSelector(state => state.cryptos.cryptoData.data)
  console.log(cryptoCoins)
  const classes = useStyles();
  
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)



  const handlePageNumber = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    setCurrentPage(e.target.id)
  }

  const pages = []
  let pageNumber,
      currentItem

  if(cryptoCoins !== undefined){
    for(let i = 1; i <= Math.ceil(cryptoCoins.coins.length/itemsPerPage); i++){
      pages.push(i)
    }
  

   pageNumber = pages.map(num => <li 
                                    key={num} 
                                    id={num} 
                                    onClick={(e) => handlePageNumber(e)}
                                    className={currentPage == num ? 'active': null}
                                    
                                    > {num} </li>)

  const indexOfLastItem = currentPage*itemsPerPage

  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  currentItem = cryptoCoins.coins.slice(indexOfFirstItem, indexOfLastItem)
 
  }


  return (
    <>
    
    {!cryptoCoins && (<h1>Loading...</h1>)}
      {cryptoCoins && (currentItem.map(el => {

        // displaying the graph
       const graphData = {
        labels: [...Array(el.history.length).keys()],
        datasets: [
          {
            label: `${el.name} Coin Chart`,
            responsive: true,
            fill: false,
            lineTension: 0.5,
            backgroundColor: el.color,
            pointRadius: 0,
            pointBorderColor: el.color,
            padding: 0,
            borderWidth: 2,
            data: el.history,
            scales: {
              xAxis: [{
                 gridLines: {
                    display: false
                 }
              }],
              yAxis: [{
                 gridLines: {
                    display: false
                 }
              }]
         }
          }
        ]
      }
       
        return(
          
          <Grid item xs={6} sm={3} key={el.id}>
        <Card className={classes.root} >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} style={{backgroundColor: 'white'}}>
              <img src={el.iconUrl} alt={el.symbol} style={{width: `40px`, height: '40px'}}/>
            </Avatar>
            
          }
          title={el.name}
          subheader={el.slug}
        />
        
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div className="coinInfo">
                <p>Coin Info</p>
                <p className="price" sm={6}>
                  <span>Price : </span> <span>{(Number(el.price)).toLocaleString('en-US', {
                    style: 'currency',
                    currency: cryptoCoins.base.symbol,
                  })}</span>
                </p>
              </div>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div" >
              {/* {el.description} */}
              <div className="data">
                
                <p className="coin-data" sm={6}>
                  <span>Market Cap</span> <span>{(el.marketCap).toLocaleString('en-US', {
                    style: 'currency',
                    currency: cryptoCoins.base.symbol,
                  })}</span>
                </p>
                <p className="coin-data" >
                  <span>Volume <span>(24h)</span></span>  <span>{(el.volume).toLocaleString('en-US', {
                    style: 'currency',
                    currency: cryptoCoins.base.symbol,
                  })}</span>
                </p>
                <p className="coin-data">
                  <span>Circulating Supply</span> <span>{(Number(el.circulatingSupply)).toLocaleString('en-US')} {el.symbol}</span>
                </p>
              </div>
              <section className="history">
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
              </section>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={{
              pathname: `/currency/${el.name}`,
              state: {coinId: el.id}
            }} size="small" color="primary">Learn More</Link>
        </CardActions>
      </Card>
        </Grid>
        )
      }))}

<ul className="pageNumbers">
    {pageNumber}
    </ul>
    </>
  );
}

export default withRouter(MediaCard)