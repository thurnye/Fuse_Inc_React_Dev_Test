import React from 'react';
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
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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



  return (
    <>
    {!cryptoCoins && (<h1>Loading...</h1>)}
      {cryptoCoins && (cryptoCoins.coins.map(el => {
       
       
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
                
              </section>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={{
              pathname: `/currency/${el.name}`,
              search: `?${el.name}`,
              state: {coinId: el.id}
            }} size="small" color="primary">Learn More</Link>
        </CardActions>
      </Card>
        </Grid>
        )
      }))}
    </>
  );
}

export default withRouter(MediaCard)