import { makeStyles } from '@material-ui/core/styles';
import {useEffect} from 'react'
import { Grid } from '@material-ui/core';
import Aos from "aos"
const useStyles = makeStyles((theme) => ({
    nav: {
        marginTop:"100px",
        borderRadius:"5px",
        height: "60px",
        backgroundColor: '#EDF1FD',
        padding: '0px',
        display: 'flex',
        position: 'fixed',
        zIndex: 10000,
        width: '90%',
        boxShadow: " 2px 2px 12px rgba(0, 0, 0, 0.05)",
    },
    list: {
        display: 'flex',
    },
    deco: {
        display: 'block',
        listStyle: 'none',
    },
    adeco: {
        textDecoration: 'none',
        color: 'grey',
        padding: '10px',
        '&:hover': {
            color: 'white',
            backgroundColor: '#131313',
            transition: "0.7s"
        }
    },
    logo: {
        marginLeft: '7px',
        maxWidth: '200px'
    },
    dot: {
        color: '#1de9b6',
        fontSize: '40px',
        maxHeight: '20px'
    },
    mg: {
        marginTop: '-20px'
    }
}));

function About() {
    const classes = useStyles()
    useEffect(() => {
        Aos.init({ duration: 300,delay:100});
      }, [])
    return (
        <div data-aos="fade-down" className={classes.nav} >
            <Grid container
                className={classes.mg}
                duration="column"
                justify="center"
                alignItems="center"
            >
                <Grid item md={4} xs={4}>
                    <h1 className={classes.logo}>EYE TECH<span className={classes.dot}>.</span></h1>
                </Grid>
                <Grid item md={8} xs={8}>
                    <ul className={classes.list} >
                        <li className={classes.deco}><a className={classes.adeco} href="#Home">HOME</a></li>
                        <li className={classes.deco}><a className={classes.adeco} href="#About">ABOUT</a></li>
                        <li className={classes.deco}><a className={classes.adeco} href="#Portofolio">PORTOFOLIO</a></li>
                        <li className={classes.deco}><a className={classes.adeco} href="#Contact">CONTACT ME</a></li>
                    </ul>
                </Grid>
        
            </Grid>
        </div>
    );
}

export default About;