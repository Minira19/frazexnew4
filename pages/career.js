import React from 'react'
import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import HeadText from '../src/components/Career/HeadText'
import PreInputText from '../src/components/Career/PreInputText'
import Registration from '../src/components/Career/Registration'
import styles from '../styles/Home.module.css'
import ReactDOM from 'react-dom'
import {makeStyles} from '@material-ui/core/styles'


//components


export default function Career(props) {
  return (
    <Grid container direction="column" style={{backgroundColor:'#1d1d1d',padding: '57px 0 74px 0' }} >
   <HeadText />
   <PreInputText />
   <Registration/>
    </Grid>
  )
}
