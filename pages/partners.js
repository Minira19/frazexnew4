import React from 'react'
import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import HeadText2 from '../src/components/Partners/HeadText2'
import PartnersLogo from '../src/components/Partners/PartnersLogo'
import styles from '../styles/Home.module.css'
import ReactDOM from 'react-dom'
import {makeStyles} from '@material-ui/core/styles'
//components

export default function Partners(props) {
  return (
  <Grid container direction="column" style={{backgroundColor:'#1d1d1d',padding: '57px 0 57px 0' }} >
      <HeadText2 />
      <PartnersLogo/>
    </Grid>
  )
}
