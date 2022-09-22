import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ScrollView from '../../base-ui/scroll-view'
import LongforItem from '../longfor-item'
import { SectionLongforWrapper } from './style'

const SectionLongfor = memo((props) => {
  const {longfor} = props
  return (
    <SectionLongforWrapper>
      <ScrollView>
        {
          longfor.map(item => <LongforItem itemData={item} key={item.city} />)
        }
      </ScrollView>
    </SectionLongforWrapper>
  )
})

SectionLongfor.propTypes = {
  longfor: PropTypes.array
}

export default SectionLongfor