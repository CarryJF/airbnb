import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import RightArrowSvg from '../../assets/svg/right-arrow-avg'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { cityName } = props
  const navigate = useNavigate()

  function navigatorTo() {
    navigate("/entire")
  }

  let showElement = ""
  if (cityName) {
    showElement = <div className='active' onClick={() => navigatorTo()}>显示更多{cityName}房源</div>
  } else {
    showElement = <div onClick={() => navigatorTo()}>查看全部</div>
  }
  
  return (
    <SectionFooterWrapper>
      <div className="desc">
        {showElement}
        <div className='svg'>
          <RightArrowSvg />
        </div>
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  cityName: PropTypes.string
}

export default SectionFooter