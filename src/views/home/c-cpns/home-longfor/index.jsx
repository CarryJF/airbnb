import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionFooter from '../../../../components/section-footer'
import SectionHeader from '../../../../components/section-header'
import SectionLongfor from '../../../../components/section-longfor'
import { HomeLongforWrapper } from './style'

const HomeLongfor = memo((props) => {
  const {itemData} = props
  return (
    <HomeLongforWrapper>
      <SectionHeader title={itemData.title} subTitle={itemData.subtitle} />
      <SectionLongfor longfor={itemData.list} />
      <SectionFooter />
    </HomeLongforWrapper>
  )
})

HomeLongfor.propTypes = {
  itemData: PropTypes.object
}

export default HomeLongfor