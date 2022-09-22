import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ScrollView from '../../../../base-ui/scroll-view'
import RoomItem from '../../../../components/room-item'
import SectionFooter from '../../../../components/section-footer'
import SectionHeader from '../../../../components/section-header'
import { HomeSectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {
  const { itemData } = props
  console.log(itemData.list.length)
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={itemData.title} subTitle={itemData.subtitle} />
      <div className="container">
        <ScrollView>
          {
            itemData.list.map(item => <RoomItem roomItem={item} key={item.id} itemWidth="20%" />)
          }
        </ScrollView>
      </div>
      <SectionFooter />
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV3