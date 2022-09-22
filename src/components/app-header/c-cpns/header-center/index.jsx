import React, { memo } from 'react'
import SearchSvg from '../../../../assets/svg/search-svg'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='left'>搜索房源和体验</div>
      <div className="right">
        <SearchSvg/>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter