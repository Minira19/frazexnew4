import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
body: {
   backgroundColor:'#1d1d1d'
    },
mainTypography: {
   fontFamily: 'Montserrat',
   fontStyle: 'normal',
   fontWeight: '800',
   fontSize: '24px',
   lineHeight: '29px',
   textTransform: 'uppercase',
   color: '#8D6723',
   borderBottom: '2px solid #8D6723', 
   paddingBottom:'7px'
    },
mainGrid: {
    display: 'flex',
    flexWrap:'nowrap'
    }
    ,
mainTypographyGrid: {
    width: '123px',
    heigth: '58px',
    },
typographyGrid: {
    paddingLeft: '32px',
    width: '791px',
    heigth: '144px',   
    },
leftTypographies: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#E4E4E4'

}
}))
export default function HeadText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
        <Grid container className={classes.mainGrid}>
        <Grid className={classes.mainTypographyGrid}  item>
       <Typography className={classes.mainTypography}>WE NEED YOU!</Typography></Grid>      
       <Grid className={classes.typographyGrid}  >
       <Typography className={classes.leftTypographies} style={{paddingBottom:'24px'}}>We are a team of dreamers and implementers, who come
       together to change our like-minded people’s world and future for the better.
       </Typography>
       <Typography className={classes.leftTypographies}>
      A feature of our team’s methodology is maximum project involvement, and a complex approach to
      problem solving. You will be able to express your uniqueness in our diverse team, realize your
      capabilities, gain invaluable experience and become an integral part of Frazex
      </Typography>
          </Grid>           
        </Grid>
      </Grid>
    </Container>
  )
}