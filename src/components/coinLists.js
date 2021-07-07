import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
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

export default function MediaCard() {

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
            <Typography gutterBottom variant="h5" component="h2">
              Metric Info
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" noWrap>
              {el.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
        </Grid>
        )
      }))}
    </>
  );
}
