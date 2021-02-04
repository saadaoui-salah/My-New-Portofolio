import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { Typography, Card, CardContent, CardHeader } from '@material-ui/core';
import Aos from "aos"
import "aos/dist/aos.css"
import { useSpring, animated } from 'react-spring'
import { useEffect } from 'react';

const useStyles = makeStyles(() => ({
  paper: {
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#2c303a',
    margin: '0px 10px 10px 10px',
    borderRadius: '10px',
  },
  margin: {
    height: '30px'
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#2c303a',
    color: '#54fdd4',
    opacity: 0.8,
    marginTop: '40px',
    borderRadius: '8px'
  },
  text: {
    color: '#FFF',
  },
  divider1: {
    marginTop: '60px',
    background: 'linear-gradient(93.4deg, #4d76d5 8.16%, #5bd9ff 37.71%, #54fdd4 64.19%, #5ee58d 87.62%, #1af563 99.34%)',
    height: '3px',
  },
  divider2: {
    marginTop: '60px',
    background: 'linear-gradient(93.4deg, #1af563 8.16%, #5ee58d 37.71%, #54fdd4 64.19%, #5bd9ff 87.62%, #4d76d5 99.34%)',
    height: '3px',
  },
  mgt: {
    marginTop: '10px'
  },
  pdr: {
    paddingRight: '80px',
    position: 'absolute'
  },
  sliderText: {
    color: 'white',
    fontSize: '1em',
  },
  SliedBar: {
    position: 'absolute',
    left: '0px',
    width: '250px',
    height: '6px',
    background: 'linear-gradient(93.4deg, #4d76d5 8.16%, #5bd9ff 37.71%, #54fdd4 64.19%, #5ee58d 87.62%, #1af563 99.34%)',
    borderRadius: '30px'
  },
  SlideBg: {
    position: 'relative',
    zIndex: 1,
    width: '300px',
    height: '6px',
    background: '#f1f1f1',
    borderRadius: '30px',

  },
  title: {
    color: '#54fdd4',
    padding: "0px",
    margin: '0px'
  }
}));
const technologyStyle = makeStyles((percentage) => ({
  width: {
    width: percentage
  }
}))


const Content = (Tech, skill) => {
  const classes = useStyles()
  const barAnim = useSpring({
    from: {
      width: 0,
      transition: '0.5s'
    },
    to: {
      width: 250
    },
    delay: 300
  })
  return (
    <Grid container>
      {skill.Technologies.map((technology) => {
        const tech = Tech.map((t) => technology === t.ID)
        const technologyStyle = technologyStyle(tech.Percentage)
        console.log(tech)
        return (
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Grid container direction="row" alignItems="center" justify="center" >
              <Grid item md={3} lg={3} xs={2}>
                <Typography data-aos="fade-right" data-aos-duration="800" className={classes.sliderText} >{tech.Name}</Typography>
              </Grid>
              <Grid item md={1} lg={1} xs={1}></Grid>
              <Grid item md={8} lg={8} xs={10}>
                <div data-aos="fade-left" data-aos-duration="800" className={classes.SlideBg}><animated.span style={barAnim} className={technologyStyle.width}></animated.span></div>
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}
function About(Skills, Tech) {
  const classes = useStyles()
  useEffect(() => {
    Aos.init({ duration: 300, delay: 100 });
  }, [])
  return (
    <div id="About" className={classes.paper}>
      <Grid container>
        <Grid item xs={4} md={5}>
          <div className={classes.divider1}></div>
        </Grid>
        <Grid item xs={4} md={2}>
          <h1 className={classes.header}>
            My Skills
          </h1>
        </Grid>
        <Grid item xs={4} md={5}>
          <div className={classes.divider2}></div>
        </Grid>
        {Skills.Skills.map((skill) => {
          return (
            <Grid item lg={4} xl={4} md={4} key={skill.id} xs={12} >
              <Card data-aos="flip-left"
                className={classes.box}>
                <h1 data-aos="fade-top"
                  className={classes.title}
                >
                  {skill.Name}
                </h1>
                <Grid item
                  xs={12}
                  md={12}
                >
                  <CardContent>
                    <Content skill={skill} Tech={Tech} />
                  </CardContent>
                </Grid>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <div className={classes.margin}></div>
    </div>
  );
}

export default About;