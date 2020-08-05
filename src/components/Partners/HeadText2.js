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
    width: '155px',
    heigth: '58px',
    },
typographyGrid: {
    paddingLeft: '50px',
    width: '388px',
    heigth: '48px',   
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
export default function HeadText2() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
        <Grid container className={classes.mainGrid}>
        <Grid className={classes.mainTypographyGrid}  item>
       <Typography className={classes.mainTypography}>FRIENDS OF FRAZEX</Typography></Grid>      
       <Grid className={classes.typographyGrid}  >
       <Typography className={classes.leftTypographies} >We are proud of our friendship with like-minded
people who have become our partners.
       </Typography>
          </Grid>           
        </Grid>
      </Grid>
    </Container>
  )
}