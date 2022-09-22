import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { HomeSectionV2Wrapper } from './style'
import SectionTabs from '../../../../components/section-tabs'
import SectionFooter from '../../../../components/section-footer'

const HomeSectionV2 = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { itemData } = props
  const itemName = Object.keys(itemData.dest_list)

  function getCurrentIndex(index) {
    setCurrentIndex(index)
  }

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={itemData.title} subTitle={itemData.subtitle} />
      <SectionTabs itemName={itemName} onCurrentIndex={getCurrentIndex} />
      <SectionRooms roomList={itemData.dest_list[itemName[currentIndex]]} itemWidth="33.33%" />
      <SectionFooter cityName={itemName[currentIndex]} />
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV2