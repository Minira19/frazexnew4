import React from 'react'
import Link from '../Link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {makeStyles} from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import Button from '@material-ui/core/Button';

 
const useStyles = makeStyles((theme) => ({
  header: {
    height: '109px',
   
  },
  headerContainer: {
    position: 'fixed',
    zIndex: '0',
    padding:' 29px 0 32px 0',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center', 
    backgroundImages: 'url(Rectangle.png)',
     backgroundColor: '#1D1D1D',
    boxShadow: '-4px 4px 8px rgba(0, 0, 0, 0.5)',  
  },
  headMenuItems: {
   paddingRight:'55px'
  } ,
  headMenuIcons: {
    width: 'auto',
    paddingLeft: '97px'
  },
  languageChangeIcon: {
    width: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  companyNameTypography: {
    fontSize: '12px',
    color:'#8D6723'
  },
  MenuItem: {
    color:'#000000'
  }
 

}))

 
export default function Header(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <header  className={classes.header}>
      <Grid className={classes.headerContainer} container direction="row">
        <Grid container style={{width:'auto',paddingLeft:'168.4px',paddingRight:'211.6px'}} >
          <Grid container style={{width:'auto'}}>
            <img src="little-fill.png"></img>
            <Grid container style={{width:'auto'}}>
              <img style={{height: '24px',position: 'absolute',top: '45px',right:'86.3%'  }} src="littleA.png"></img>
              <img style={{ position: 'absolute', top: '45px', right: '86.45%',height:'24px' }}
                className={classes.headLogoZLetter} src="little-z.png"></img>
            </Grid>
          </Grid>
          <Grid container style={{width:'auto',display:'inline-table',padding:'10px 0 0 8px'}}>
            <Grid container style={{width:'auto'}}>
              <img src="small-f-letter.png"></img>
              <img src="small-r-letter.png"></img>
              <img src="small-a-letter.png"></img>
              <img src="small-z-letter.png"></img>
              <img src="small-e-letter.png"></img>
              <img src="small-x-letter.png"></img>
            </Grid>
            <Grid item><Typography className={classes.companyNameTypography}>from A to Z experience</Typography></Grid>
          </Grid>
        </Grid>
        <Grid container style={{width:'auto'}}>
          <Grid className={classes.headMenuItems} item><img src="menu-item1.png"></img></Grid>
          <Grid className={classes.headMenuItems} item><img src="menu-item2.png"></img></Grid>
          <Grid className={classes.headMenuItems} item><img src="menu-item3.png"></img></Grid>
          <Grid className={classes.headMenuItems} item><img src="menu-item4.png"></img></Grid>
          <Grid className={classes.headMenuItems} item><img src="menu-item5.png"></img></Grid>
          <Grid className={classes.headMenuItems} item><img src="menu-item6.png"></img></Grid>
          
        </Grid>
        <Grid style={{width:'auto'}} className={classes.headMenuIcons}  container>
          <Grid style={{ paddingRight: '18px' }} item>
            <img src="search.png"></img>
          </Grid>
          <Grid aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.languageChangeIcon} >
            <Grid item>
              <img src="en.png"></img>
            </Grid>
            <Grid style={{ paddingLeft: '6px', paddingBottom:'2px' }} item>
              <img  src="Triangle.png"></img>
            </Grid>
          </Grid>
     <Menu style={{  position: 'absolute',top:'6%'}}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>ENG</MenuItem>
        <MenuItem onClick={handleClose}>RUS</MenuItem>
        <MenuItem onClick={handleClose}>AZE</MenuItem>
      </Menu>
        </Grid>
        
    </Grid>
    </header>
  )
}

