import React, { useState,useEffect } from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import { createMuiTheme } from '@material-ui/core/styles';
import Navbar from './pages/components/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import instance from './axios'

const useStyles = makeStyles(() => ({
  bg: {
    backgroundColor: '#000',
    margin:0,
    padding:0,
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
  const [skills, setSkills] = useState([])
  const [Projects, setProjects] = useState([])
  const [Tech, setTech] = useState([])
 
  async function getSkills(){
    const response = await instance.get('/api-1/skills?format=json')
    console.log(response.data)
    setSkills(response.data)
  }
  
  async function getProjects(){
    const response = await instance.get('/api-2/project?format=json')
    console.log(response.data)
    setProjects(response.data)
  }

  async function getTech(){
    const response = await instance.get('/api-1/tech?format=json')
    console.log(response.data)
    setTech(response.data)
  }
 
  useEffect(() => {
    getSkills()
    getProjects()
    getTech()
  },[])
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
      <About Tech={Tech} Skills={skills}></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
