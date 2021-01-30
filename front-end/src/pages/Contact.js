import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Input,
  TextareaAutosize,
  Button,
} from '@material-ui/core'

const theme = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
    backgroundColor: '#2c303a',
    color: '#1de9b6',
    opacity: 0.8,
    marginTop: '40px',
    borderRadius: '8px',
  },
  divider1: {
    marginTop: '20px',
    background: 'linear-gradient(93.4deg, #4d76d5 8.16%, #5bd9ff 37.71%, #54fdd4 64.19%, #5ee58d 87.62%, #1af563 99.34%)',
    height: '3px',
  },
  divider2: {
    marginTop: '20px',
    background: 'linear-gradient(93.4deg, #1af563 8.16%, #5ee58d 37.71%, #54fdd4 64.19%, #5bd9ff 87.62%, #4d76d5 99.34%)',
    height: '3px',
  },
  form: {
    backgroundColor: '#1a1a1a',
    boxShadow: '2px 12px 20px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.01)',
    maxWidth: '1000px',
    minWidth: '455px',
    margin: '20px'
  },
  text: {
    color: "white",
    fontSize: '2em',
    '&::after':{
      content:'',
      backgroundColor:'#1de9b6',
      width:100,
      height:10
    }
  },
  input: {
    backgroundColor: '#262626',
    margin: '20px',
    color: 'white',
    minWidth: '90%'
  },
  btn: {
    color: 'black',
    backgroundColor: '#fff',
    fontWeight:'bold',
    marginBottom: '10px',
    width: '100px',
    '&:hover': {
      backgroundColor: '#1de9b6',
      color: 'white',
    }
  },
  label: {
    color: 'white',
    float: 'right',
    fontSize: '1.3em',
    marginLeft: '20px',
    marginBottom: '0px',
    padding: '0px'
  }
}))

function Contact() {
  const classes = theme()
  return (
    <div id="Contact">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center" >
        <Grid item xs={3} lg={5} md={4}><div className={classes.divider1}></div></Grid>
        <Grid item xs={6} lg={2} md={4} ><h1 className={classes.header}>Contact Me</h1></Grid>
        <Grid item xs={3} lg={5} md={4}><div className={classes.divider2}></div></Grid>
      </Grid>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center" >
        <form className={classes.form}>
          <Grid container
            direction="column"
            justify="center"
            alignItems="center">
            <Typography className={classes.text}>
              Write To Me
            </Typography>
            <Grid container>
              <Typography className={classes.label}>
                Email
              </Typography>
            </Grid>
            <Input id="email" className={classes.input}></Input>
            <Grid container>
              <Typography className={classes.label}>
                Name
              </Typography>
            </Grid>
            <Input id="name" className={classes.input}></Input>
            <Grid container>
              <Typography className={classes.label}>
                Text
              </Typography>
            </Grid>
            <TextareaAutosize cols="20" rows="10" className={classes.input}></TextareaAutosize>
            <Button className={classes.btn}>SEND</Button>
          </Grid>
        </form>

      </Grid>
    </div>
  );
}

export default Contact;