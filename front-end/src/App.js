import React, { useEffect, useState} from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import { createMuiTheme } from '@material-ui/core/styles';
import Navbar from './pages/components/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
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
  },
});

function App() {
  const [skills,setSkills] = useState([])
  useEffect(()=>{
    const newLocal = 'http://127.0.0.1:8000/api-1/skill?format=json';
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
      <About></About>
      <Portofolio></Portofolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
