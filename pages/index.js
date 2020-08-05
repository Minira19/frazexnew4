import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactDOM from 'react-dom'
import MainAbout from '../src/components/Main/MainAbout'


export default function Index(props) {
  return (
    <div className={styles.container} style={{backgroundColor:'#1d1d1d' }}>
     <MainAbout/>
    </div>
  )
}
