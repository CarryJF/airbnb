import PropTypes from 'prop-types'
import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import ScrollView from '../../base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { itemName, onCurrentIndex } = props
  
  const [currentIndex, setCurrentIndex] = useState(0)

  function changeItem(index) {
    setCurrentIndex(index)
    onCurrentIndex(index)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {
          itemName.map((item, index) => (
            <button className={
              classNames("item", { active: currentIndex === index ? "active" : "" })
            } key={item}
              onClick={() => changeItem(index)}
            >
              {item}
            </button>
          ))
        }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  itemName: PropTypes.array
}

export default SectionTabs