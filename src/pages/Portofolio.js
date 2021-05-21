import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Aos from "aos"
import "aos/dist/aos.css"
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
const css = makeStyles(() => ({
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
  Cardheader: {
    color: '#EDF1FD'
  },
  header: {
    opacity: 0.8,
    color: '#54fdd4',
    marginTop: '40px',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#2c303a',
    borderColor: 'linear-gradient(93.4deg, #4d76d5 8.16%, #5bd9ff 37.71%, #54fdd4 64.19%, #5ee58d 87.62%, #1af563 99.34%)'
  },
  divider1: {
    height: '3px',
    marginTop: '20px',
    background: 'linear-gradient(93.4deg, #4d76d5 8.16%, #5bd9ff 37.71%, #54fdd4 64.19%, #5ee58d 87.62%, #1af563 99.34%)',
  },
  divider2: {
    height: '3px',
    marginTop: '20px',
    background: 'linear-gradient(80.4deg, #1af563 8.16%, #5ee58d 37.71%, #54fdd4 64.19%, #5bd9ff 87.62%, #4d76d5 99.34%)',
  },
  image: {
    width: '100%',
    height: '300px',
    position: 'absolut',
  }
}));

const Tech = (data) => {
  const name = data.tech
  const bgColor = data.bg
  const txtColor = data.txt
  const style = makeStyles(() => ({
    
    txt: {
      color: txtColor ,
      fontSize:'0.8em',
      margin: '6px 3px',
      padding: '2px 6px',
      borderRadius:'20px',
      display: 'inline-block',
      backgroundColor: bgColor,
    }
  }))
  const classes = style()
  return (
      <p className={classes.txt}>{name}</p>
  )
}

function Portofolio(data) {
  const classes = css()
  useEffect(() => {
    Aos.init({ duration: 300, delay: 100 });
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
        {data.Projects.map((project) => {
          return (
            <Grid item lg={3} ml={4} md={6} xl={6} xs={12}>
              <Card data-aos="zoom-in" className={classes.card}>
                <CardActionArea alt="Click Me" href={project.Url}>
                  <CardContent>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center" >
                      <Typography gutterBottom variant="h5" component="h2" className={classes.Cardheader}>
                        {project.Name}
                      </Typography>
                    </Grid>
                    <Typography variant="body2" className={classes.text} component="p">
                      {project.Description}
                    </Typography>
                    {project.Technologies.map((technology) => {
                      return (
                        <>
                          {data.Techs.map((tech) => {
                            if (technology === tech.id) {
                              const name = tech.Name
                              const txtColor = tech.TextColor
                              const bgColor = tech.BackgroundColor
                              return (
                                  <Tech tech={name} txt={txtColor} bg={bgColor} />
                              )
                            }
                          })}
                        </>
                      )
                    })}
                    <img className={classes.image} alt="Click Me" src={project.Image} />
                  </CardContent>
                </CardActionArea>
                
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div >
  );
}

export default Portofolio;