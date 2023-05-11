import React, { ReactElement } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import Timeline from './components/timeline/Timeline'

/* <div className="App text-red-900">Welcome to design system !!!</div> */

const App = (): ReactElement => (
  <div>
    <Layout></Layout>
    <Timeline></Timeline>
  </div>
)

export default App
