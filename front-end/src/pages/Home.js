import React from 'react'
import { Avatar, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSpring, animated } from 'react-spring'
import Typical from 'react-typical'
import Aos from 'aos'
import { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '10px'
  },
  margin: {
    marginTop: '60px'
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  text: {
    color: 'white',
    marginTop: '1px'
  },
  span: {
    color: '#1de9b6'
  },
  avatar: {
    marginTop: '20px',
    marginBottom: '20px',
    width: '150px',
    height: '150px',
    backgroundColor: 'white',

  },
  btn: {
    marginTop: '20px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '50px',
    boxShadow: 'inset 0 30 45px 55px #f3f7f7',
    background: '#f1f1f1',
  },
  wel: {
    color: '#fff'
  },
  card: {
    backgroundColor: "#2c303a",
    width: '70%',
    marginTop: "200px",
    marginBottom: "100px",
    boxShadow: "box-shadow: rgba(255, 255, 255, 0.12) 0px 1px 3px, rgba(255, 255, 255, 0.24) 0px 1px 2px;"
  }
}));
function Home() {
  const HelloAnim = useSpring({
    from: {
      opacity: 0,
      transition: "0.5s"
    },
    to: {
      opacity: 1,
    },
    delay: 200
  })
  const MeAnim = useSpring({
    from: {
      opacity: 0,
      transition: "0.5s"
    },
    to: {
      opacity: 1,
    },
    delay: 500
  })
  const WelAnim = useSpring({
    from: {
      opacity: 0,
      transition: "0.5s"
    },
    to: {
      opacity: 1,
    },
    delay: 800
  })
  useEffect(() => {
    Aos.init();
  }, [])

  const classes = useStyles();
  return (
    <div id="Home" className={classes.paper}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Card data-aos="fade-up" data-aos-easing="ease-in-sine" className={classes.card}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
            >
              <Grid container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Avatar className={classes.avatar}>NN</Avatar>
                <animated.h2 style={MeAnim} className={classes.text}>I am Salah Saadaoui</animated.h2>
                <h2 className={classes.text}>
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[' Web App Developer', 1500,
                      ' Mobile App Developer', 1500,
                      ' Desktop App Developer', 1500,
                      ' Deep Learning Enginier', 1500,]}>
                  </Typical>
                </h2>
              </Grid>
            </Grid>
            <Grid
              item
              md={6}
              lg={6}
              xs={12}
            >

              <Grid container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <animated.h2 style={HelloAnim} className={classes.text}>Hello <span className={classes.span}>!</span></animated.h2>
                <animated.h3 style={WelAnim} className={classes.wel} >Welcome To My Website</animated.h3>
                <animated.h3 style={WelAnim} className={classes.wel} >Coding dfmkhdlfihlhf q lfhlqkhfl qshfkl skhflhkqsf hlit's not just away to make </animated.h3>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}

export default Home;