import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filterData from "@/assets/data/filter-data.json"
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  function selectItem(index) {
    setCurrentIndex(index)
  }

  return (
    <EntireFilterWrapper>
      {
        filterData.map((item, index) => (
          <div onClick={() => selectItem(index)}
            className={classNames('item', {active: index === currentIndex ? 'active': ''})}
            key={item}
          >
            {item}
          </div>)
        )
      }
    </EntireFilterWrapper>
  )
})

export default EntireFilter