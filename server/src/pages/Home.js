import React from 'react'
import {
  RiLinkedinBoxLine,
  RiGithubLine,
}
  from "react-icons/ri";
import image from './image.jpg'
import { Avatar, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
  wel: {
    margin: '10px',
    color: '#fff'
  },
  icon: {
    fontSize: '50px',
    color: '#3f8a78',
    transition: '0.5s',
    '&:hover': {
      color: '#1de9b6',
    }
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
                <Avatar alt="Salah Saadaoui" src={image} className={classes.avatar}></Avatar>

              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <a className={classes.icon} alt="Visit My Github Account" href="https://www.linkedin.com/in/salah-saadaoui-5757891aa"><RiLinkedinBoxLine /></a>
                <a className={classes.icon} alt="Visit My Linkedin Account" href="https://github.com/saadaoui-salah"><RiGithubLine /></a>
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
                <h2 className={classes.text}>Hello <span className={classes.span}>!</span></h2>
                <h2 className={classes.text}>I am Salah Saadaoui</h2>
                <Typical
                  className={classes.text}
                  loop={Infinity}
                  wrapper="h2"
                  steps={[' Web App Developer', 2000,
                    'Data Scientist', 2000,
                    'AI Enginier', 2000,]}>
                </Typical>
                <h3 className={classes.wel} >Welcome To My Website</h3>
                <h3 className={classes.wel} >
                  Hard-working programmer with a flair for creating elegant solutions in the least amount of time ...<br/>
                  Looking to use my programming skills to build something new,
                  Investigated new technologies to improve my skills
                </h3>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}

export default Home;