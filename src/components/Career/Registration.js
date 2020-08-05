import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
const useStyle = makeStyles((theme) => ({
body: {
   backgroundColor:'#1d1d1d'
    },
inputDistance: {
padding:'24px 0 24px 0' 
 },
inputs: {
  width: '537px',
  height:'70px',    
  backgroundColor: '#1D1D1D',
  boxShadow: '4px -4px 10px rgba(47, 47, 47, 0.5), -4px 4px 4px rgba(0, 0, 0, 0.5)',
  borderRadius: '8px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '20px',
  color: '#E7E7E7',
  mixBlendMode: 'normal',
  opacity: '0.5',
  padding: '25px',
    '&:focused:after':{
      background:' #1D1D1D',
      boxShadow: 'inset 4px -4px 4px rgba(47, 47, 47, 0.5), inset -4px 4px 4px rgba(0, 0, 0, 0.5)',
      borderRadius: '8px',
      borderBottom:'solid 2px transparent'
  }
}
,
cvSendButton: {
    width: '138px',
    heigth: '42px',
    background: '#1D1D1D',
    boxShadow:'4px -4px 10px rgba(47, 47, 47, 0.5), -4px 4px 4px rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
    fontFamily:' Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#E7E7E7',
    padding:'12px 40px 10px 39px'
    }
    ,
cvTypography: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#E7E7E7',
    mixBlendMode: 'normal',
    opacity: '0.5',
    paddingRight:'32px'
    },
sendButtonTypography: {
   fontFamily: 'Montserrat',
   fontstyle: 'italic',
   fontWeight: 'normal',
   fontSize: '16px',
   lineHeight: '20px',
   color: '#E7E7E7' 
    },
finalButton: { 
   fontFamily: 'Montserrat',
   fontStyle: 'normal',
   fontWeight:'bold',
   fontSize: '14px',
   lineHeight:'17px',
   textAlign: 'center',
   letterSpacing: '1px',
   color: '#8D6723',
   background:'#1D1D1D',
   boxShadow: '4px -4px 8px rgba(47, 47, 47, 0.5), -4px 4px 8px rgba(0, 0, 0, 0.5)',
   borderRadius:'8px', 
   padding:'15px 55px 16px 56px' 
}
}))
export default function Registration() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
     <Grid container style={{alignItems: 'center'}} direction="column" >
                  <Grid item className={classes.inputDistance}>
                  <Input className={classes.inputs} type="text" placeholder="Full Name"></Input>
                  </Grid>
                  <Grid item className={classes.inputDistance}>
                  <Input placeholder="I want to work in your company,because" type="text" className={classes.inputs}></Input>
                  </Grid> 
                  <Grid item className={classes.inputDistance}>
                  <Input placeholder="Education" type="text" className={classes.inputs}></Input>
                  </Grid> 
                  <Grid item className={classes.inputDistance}>
                  <Input placeholder="Azerbaijani, English" type="text" className={classes.inputs}></Input>
                  </Grid> 
                  <Grid item className={classes.inputDistance}>
                  <Input placeholder="Work Experience" type="text" className={classes.inputs} ></Input>
                  </Grid> 
                  <Grid item className={classes.inputDistance}>
                  <Input placeholder="Mobile" type="tel" className={classes.inputs}></Input>
                  </Grid> 
                  <Grid item className={classes.inputDistance}>
                  <Input placeholder="E-Mail" type="email" className={classes.inputs}></Input>
                  </Grid> 
                  <Grid
                      style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '537',
                          paddingLeft:'50px'
                      }} item className={classes.inputDistance}>
                      <Typography className={classes.cvTypography}>CV</Typography>
                      <Button type="file" className={classes.cvSendButton}>SEND</Button>
                  </Grid> 
                  <Grid item className={classes.inputDistance}>
                <Typography style={{width:'532px'}} className={classes.sendButtonTypography}>* Our employees consider each resume they receive and will invite
                    you for an interview if there is an appropriate vacancy.</Typography>
                  </Grid> 
                  <Grid item className={classes.inputDistance}>
                  <Button className={classes.finalButton}>SEND</Button>
                  </Grid>           
      </Grid>
      </Grid>
    </Container>
  )
}