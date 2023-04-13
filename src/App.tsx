import React, { ReactElement } from 'react'
import './App.css'
import Layout from './components/layout/Layout'

/* <div className="App text-red-900">Welcome to design system !!!</div> */

const App = (): ReactElement => (
  <div className="App text-red-900">
    <Layout></Layout>
  </div>
)

export default App
