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
    flexWrap:'nowrap',
    padding:'89px 0 56px 0 '
    }
    ,
mainTypographyGrid: {
    width: '238px',
    heigth: '58px',
    },

}))
export default function PreInputText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
        <Grid container className={classes.mainGrid}>
        <Grid className={classes.mainTypographyGrid}  item>
       <Typography className={classes.mainTypography}>HELLO! I WANT TO WORK WITH YOU.</Typography></Grid>                     
        </Grid>
      </Grid>
    </Container>
  )
}