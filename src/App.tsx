import React, { ReactElement } from 'react'
import './App.css'
import Button from './components/button/Button'
import { FaBeer } from 'react-icons/fa'

const App = (): ReactElement => {
  const handleClick = (): void => {
    console.log('clickeed')
  }
  return (
    <div>
      {/*  <Layout></Layout>
    <Timeline></Timeline>
    <HorizontalTextTimeline></HorizontalTextTimeline> */}
      <div>
        <Button primary rounded className="mb-4" onClick={handleClick}>
          <FaBeer></FaBeer> Click me
        </Button>
      </div>
      <div>
        <Button secondary>secondary</Button>
      </div>
      <div>
        <Button success>success</Button>
      </div>
      <div>
        <Button warning>warning</Button>
      </div>
      <div>
        <Button danger>rounded</Button>
      </div>
      <div>
        <Button outline primary>
          outline
        </Button>
      </div>
    </div>
  )
}

export default App
