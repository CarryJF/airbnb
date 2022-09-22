import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { HomeSectionV1Wrapper } from './style'
import SectionFooter from '../../../../components/section-footer'

const HomeSectionV1 = memo((props) => {
  const {itemData} = props
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={itemData.title} subTitle={ itemData.subtitle} />
      <SectionRooms roomList={itemData.list} itemWidth="25%" />
      <SectionFooter/>
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV1