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
  const [Techs, setTechs] = useState([])
  const [Specialyties, setSpecialyties] = useState([])
 
  async function getSkills(){
    const response = await instance.get('/api-1/skills?format=json')
    setSkills(response.data)
  }

  async function getSpecialities(){
    const response = await instance.get('/api-1/specialities?format=json')
    setSpecialyties(response.data)
  }
  
  async function getProjects(){
    const response = await instance.get('/api-2/projects?format=json')
    setProjects(response.data)
  }
  
  async function getTechs(){
    const response = await instance.get('/api-2/techs?format=json')
    setTechs(response.data)
  }
  
  useEffect(() => {
    getSkills()
    getTechs()
    getProjects()
    getSpecialities()
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
      <About Skills={skills} Specialyties={Specialyties}/>
      <Portofolio Projects={Projects} Techs={Techs}/>
      <Contact/>
    </div>
  );
}

export default App;
