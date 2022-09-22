import React, { memo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchGoodPrice } from '../../store/modules/home'
import { isEmptyObject } from '../../utils/index'
import Banner from './c-cpns/banner'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { HomeWrapper } from './style'

const index = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longforInfo, plusRoomInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusRoomInfo: state.home.plusRoomInfo
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPrice())
  }, [dispatch])

  return (
    <div>
      <Banner />
      <HomeWrapper>
        {isEmptyObject(discountInfo) && <HomeSectionV2 itemData={discountInfo} />}
        {isEmptyObject(hotRecommendInfo) && <HomeSectionV2 itemData={hotRecommendInfo} />}
        {isEmptyObject(longforInfo) && <HomeLongfor itemData={longforInfo} />}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 itemData={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 itemData={highScoreInfo} />}
        {isEmptyObject(plusRoomInfo) && <HomeSectionV3 itemData={plusRoomInfo} />}
      </HomeWrapper>
    </div>
  )
})

export default index