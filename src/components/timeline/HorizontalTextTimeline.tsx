import React, { useState } from 'react'
import HorizontalTimeline from 'react-horizontal-timeline'

const Timeline = (): JSX.Element => {
  const labels = ['New Year', 'Festival', 'Board Exam', 'Graduation']
  const [value, setValue] = useState(0)

  const handleClick = (index: number): void => {
    setValue(index)
  }

  /* const isPastEvent = (index: number): boolean => {
    return index <= value
  } */

  const VALUES = [0, 1, 2, 3]

  return (
    <div className="root-div mt-40">
      <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
        <HorizontalTimeline
          index={value}
          indexClick={handleClick}
          values={VALUES}
          getLabel={(index: number) => labels[index]}
          renderDate={(date: Date) => <div>{labels[date.getTime()]}</div>}
          minEventPadding={150}
          maxEventPadding={150}
          styles={{
            background: '#fff',
            foreground: '#7b9d6f',
            outline: '#dfdfdf'
          }}
        />
      </div>
      <div className="text-center">{labels[value]}</div>
    </div>
  )
}
export default Timeline
