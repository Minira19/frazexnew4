import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyle = makeStyles((theme) => ({
body: {
   backgroundColor:'#1d1d1d'
    },
partnerLogo: {
  padding:'45px 50px'
  },
logoBorder: {
  background: '#1D1D1D',
  boxShadow: '4px -4px 10px rgba(47, 47, 47, 0.5), -4px 4px 4px rgba(0, 0, 0, 0.5)',
  borderRadius: '8px',
  margin: '0 35px 37px 0',
  width: '251px',
  height:'251px'
  },
logoGrid: {
  display:'flex'
}
}))
export default function HeadText2() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto',padding:'95px 0 292px 0'}} container direction="column">
              <Grid container className={classes.mainGrid}>
                <Grid className={classes.logoGrid}>
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo} src="partners.png"></img>
            </Grid> 
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo}  src="partners.png"></img>
            </Grid> 
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo}  src="partners.png"></img>
            </Grid> 
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo}  src="partners.png"></img>
            </Grid> 
                 </Grid>
               <Grid className={classes.logoGrid}>
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo}  src="partners.png"></img>
            </Grid> 
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo}  src="partners.png"></img>
            </Grid> 
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo}  src="partners.png"></img>
            </Grid> 
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo}  src="partners.png"></img>
            </Grid> 
              </Grid>  
               <Grid className={classes.logoGrid}>
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo}  src="partners.png"></img>
            </Grid> 
            <Grid className={classes.logoBorder}  item  >
            <img className={classes.partnerLogo}  src="partners.png"></img>
            </Grid> 
            <Grid className={classes.logoBorder}  item  >
             <img className={classes.partnerLogo}  src="partners.png"></img>           
            </Grid> 
            <Grid className={classes.logoBorder}  item  >
              <img className={classes.partnerLogo}  src="partners.png"></img>

            </Grid> 
               </Grid>         
        </Grid>
      </Grid>
    </Container>
  )
}