import React, { Component } from 'react'
import Header from '@components/header'
import Footer from '@components/footer'
import logo from '@assets/logo.svg'

export default class App extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <Header />
        <img src={logo} alt="" width="200"/>
        <h1>This is app.js file</h1>
        <Footer />
      </div>
    )
  }
}

