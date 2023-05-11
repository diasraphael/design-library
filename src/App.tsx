import React, { ReactElement } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import HorizontalTextTimeline from './components/timeline/HorizontalTextTimeline'
import Timeline from './components/timeline/Timeline'

const App = (): ReactElement => (
  <div>
    <Layout></Layout>
    <Timeline></Timeline>
    <HorizontalTextTimeline></HorizontalTextTimeline>
  </div>
)

export default App
