import React, { useState } from 'react'
import HorizontalTimeline from 'react-horizontal-timeline'

const Timeline = (): JSX.Element => {
  const [value, setValue] = useState(0)
  const [, setPrevious] = useState(0)

  // Values should be only date
  const VALUES = ['2021-01-01', '2021-01-15', '2021-03-22', '2021-05-23']

  // Description array corresponding to values
  const description = [
    'The event of 1 Jan 2021 : Happy New Year',
    'The event of 15 Jan 2021 : Festival',
    'The event of 22 March 2021 : Board Exam'
  ]
  return (
    <div className="root-div mt-40">
      <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
        <HorizontalTimeline
          index={value}
          indexClick={(index: number) => {
            setValue(index)
            setPrevious(value)
          }}
          values={VALUES}
          minEventPadding={150}
          maxEventPadding={150}
          labelWidth={100}
          styles={{
            background: '#fff',
            foreground: '#7b9d6f',
            outline: '#dfdfdf'
          }}
        />
      </div>
      <div className="text-center">{description[value]}</div>
    </div>
  )
}

export default Timeline
