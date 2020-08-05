import React from 'react'
import Grid from '@material-ui/core/Grid'
import MissionBody from '../src/components/Mission/MissionBody'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactDOM from 'react-dom'
import {makeStyles} from '@material-ui/core/styles'


//components


export default function Mission(props) {
  return (
    <Grid container direction="column" style={{ paddingTop: '57px',backgroundColor:'#1d1d1d' }}>
    <MissionBody />
  
    </Grid>
  )
}
