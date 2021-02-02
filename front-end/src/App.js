import React, { useState } from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import { createMuiTheme } from '@material-ui/core/styles';
import Navbar from './pages/components/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import axios from 'axios'

const useStyles = makeStyles(() => ({
  bg: {
    backgroundColor: '#000'
  }
}))
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#010101',
    },
    Green: {
      light: '#1de9b6'
    },
    white: {
      color: 'white'
    }
  },
});

function App() {
  const newLocal = 'http://127.0.0.1:8000/api-1/skill';
  const [skills, setSkills] = useState(skills => {
     axios
      .get(newLocal)
      .then((response) => {
        console.log(response.data)
        setSkills(response.data)
      })
      .catch((error) => console.log(error))
  })
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Grid container
        duration="column"
        justify="center"
        alignItems="center">
        <Navbar></Navbar>
      </Grid>
      <Home></Home>
      <h1 className={classes.white}></h1>
      <About></About>
      <Portofolio></Portofolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
