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
  fontStyle:'normal',
  fontWeight: '800',
  fontSize: '24px',
  lineHeight: '29px',
  textTransform: 'uppercase',
  color: '#8D6723',
  borderBottom: '2px solid #8D6723',
  paddingBottom: '7px',
 
  },
  typographyBorder: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight:'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#E4E4E4'
  },
  whiteTypographyBorder: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight:'600',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#E4E4E4',
    paddingBottom: '24px'
   },
  whiteDownTypographyBorder: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight:'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#E4E4E4'
  },
  mainWhiteTypography: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '29px',
    textTransform: 'uppercase',
    color: ' #E7E7E7',
    borderBottom: '2px solid  #E7E7E7',
    paddingBottom: '7px',
    heigth: '58px',
    width: '135px',
  },
  gridContainer :{
   display: 'grid',
   gridTemplateColumns: 'auto auto' 
 },
  gridItem: {
   padding: '0 70px 88px 0',
   width:'135px'
  
}
}))
export default function Offers() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
        <Grid className={classes.gridContainer}>
          <Grid className={classes.gridItem}>
            <Grid className={classes.mainTypographyBorder} item>
            <Typography className={classes.mainTypography}>MISSION & VISION</Typography>
            </Grid>
          </Grid>
          <Grid direction="column">  
           <Typography className={classes.typographyBorder}>Every person is a source of ideas..</Typography>
           <Typography className={classes.typographyBorder}>We are only trying to build environment for their embodiment</Typography>  
          </Grid>
          <Grid className={classes.gridItem}>
            <Grid className={classes.mainWhiteTypographyBorder} item>
            <Typography className={classes.mainWhiteTypography}>MISSION</Typography>
            </Grid>
          </Grid>  
          <Grid direction="column" > 
           <Typography className={classes.whiteTypographyBorder}>Contribution to the development of ideas!</Typography>
            <Typography className={classes.whiteDownTypographyBorder}>Our mission is to support the 
            reputation of one of the most dynamic and innovative companies on the
             market, invest in innovative ideas, planning scalable ideas and develop them.</Typography>  
         </Grid>
          <Grid className={classes.gridItem}>
            <Grid className={classes.mainWhiteTypographyBorder} item>
            <Typography className={classes.mainWhiteTypography}>VALUES</Typography>
            </Grid>
          </Grid>
          <Grid direction="column" >
            <Typography className={classes.whiteTypographyBorder}>Truthfulness, honesty and openness!</Typography>
            <Typography className={classes.whiteDownTypographyBorder}>
         We make decisions based on transparent processes, ensuring fairness, accuracy of information and
        compliance with our responsibilities to colleagues and partners.</Typography>
          </Grid>  
          <Grid className={classes.gridItem}>
            <Grid className={classes.mainWhiteTypographyBorder} item>
            <Typography className={classes.mainWhiteTypography}>APPROACH</Typography>
            </Grid>
          </Grid>
          <Grid direction="column">  
            <Typography className={classes.whiteTypographyBorder}>Competitive advantage!</Typography>
            <Typography className={classes.whiteDownTypographyBorder}>
           We establish competitive advantages and resources in the market needed to achieve the highest and
           the most sustainable outcomes.</Typography>  
          </Grid>
          <Grid className={classes.gridItem}>
            <Grid className={classes.mainWhiteTypographyBorder} item>
            <Typography className={classes.mainWhiteTypography}>VISION</Typography>
            </Grid>
          </Grid> 
          <Grid direction="column" >
             <Typography className={classes.whiteTypographyBorder}>Explore, analyse, proceed!</Typography>
            <Typography className={classes.whiteDownTypographyBorder}>
          Simple at first glance ideas need to be developed in order to get grandiose results. We share our
          experience and invest in ventures and people willing to tackle daily challenges of life.</Typography>
          </Grid>  
          <Grid className={classes.gridItem}>
            <Grid className={classes.mainWhiteTypographyBorder} item>
            <Typography className={classes.mainWhiteTypography}>SOLUTION</Typography>
            </Grid>
          </Grid>  
          <Grid direction="column" >
            <Typography className={classes.whiteTypographyBorder}>Objectivity!</Typography>
            <Typography className={classes.whiteDownTypographyBorder}>
          We prioritize decisions that provide accurate statistics, straightforward rationality, external standpoints
          appraisal and tremendous interrelationships.</Typography>
          </Grid>  
          <Grid className={classes.gridItem}>
            <Grid className={classes.mainWhiteTypographyBorder} item>
            <Typography className={classes.mainWhiteTypography}>PRINCIPLE</Typography>
            </Grid>
          </Grid>  
          <Grid direction="column" >
           <Typography className={classes.whiteTypographyBorder}>Leadership!</Typography>
           <Typography className={classes.whiteDownTypographyBorder}>
          For us, being a leader – means being a role model. For us, being a leader means – leading.</Typography>
          </Grid>  
         </Grid>
      </Grid>
    </Container>
  )
}
