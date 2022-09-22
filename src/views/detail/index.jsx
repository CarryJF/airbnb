import React, { memo } from 'react'
import DetailImageList from './c-cpns/detail-imglist'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  
  return (
    <DetailWrapper>
      <DetailImageList/>
    </DetailWrapper>
  )
})

export default Detail