import {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Aos from "aos"
import "aos/dist/aos.css"
import {
  Card,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
const css = makeStyles((theme) => ({
  paper: {
    margin: '0px',
    padding: '0px',
  },
  height: {
    maxHeight: '80px'
  },
  card: {
    backgroundColor: '#2c303a',
    margin: '0px 10px 10px 10px',

  },
  text: {
    color: '#fff',
  },
  btn: {
    color: '#2196f3',
    fontWeight: 'bold',
    background: '#fff',
  },
  Cardheader: {
    color: '#EDF1FD'
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#2c303a',
    color: '#54fdd4',
    opacity: 0.8,
    marginTop: '40px',
    borderRadius: '8px',
    borderColor:'linear-gradient(93.4deg, #4d76d5 8.16%, #5bd9ff 37.71%, #54fdd4 64.19%, #5ee58d 87.62%, #1af563 99.34%)'
  },
  divider1: {
    marginTop: '20px',
    background: 'linear-gradient(93.4deg, #4d76d5 8.16%, #5bd9ff 37.71%, #54fdd4 64.19%, #5ee58d 87.62%, #1af563 99.34%)',
    height: '3px',
  },
  divider2: {
    marginTop: '20px',
    background: 'linear-gradient(80.4deg, #1af563 8.16%, #5ee58d 37.71%, #54fdd4 64.19%, #5bd9ff 87.62%, #4d76d5 99.34%)',
    height: '3px',
  },
}));



function Portofolio() {
  const classes = css()
  useEffect(() => {
    Aos.init({ duration: 300,delay:100});
  }, [])
  return (
    <div id="Portofolio">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center" >
        <Grid item xs={4} md={5}><div className={classes.divider1}></div></Grid>
        <Grid item xs={4} md={2} ><h1 className={classes.header}>Portofolio</h1></Grid>
        <Grid item xs={4} md={5}><div className={classes.divider2}></div></Grid>
      </Grid>
      <Grid container>
        <Grid item lg={3} ml={4} md={6} xl={6} xs={12}>
          <Card data-aos="zoom-in" className={classes.card}>
            <CardActionArea>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center" >
                  <Typography gutterBottom variant="h5" component="h2" className={classes.Cardheader}>
                    Lizard
                  </Typography>
                </Grid>
                <Typography variant="body2" className={classes.text} component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center" >
                <Button className={classes.btn}>
                  Show
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Portofolio;