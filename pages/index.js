import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Validator from './validator'
import Navbar from './Navbar'
import Footer from './Footer'

import About from './About'
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
export default function Home() {
  return (
    <div>
      <Navbar/>
    <Validator/>
    {/* <Footer/> */}
    <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <about />
        </Paper>
      </Container>
   
    </div>
    
  )
}
