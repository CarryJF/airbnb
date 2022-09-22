import React, { memo, useState } from 'react'
import { DetailImageListWrapper } from './style'
import { useSelector, shallowEqual } from 'react-redux'
import PictureBrowser from '../../../../base-ui/picture-browser'

const DetailImageList = memo(() => {
  const [isShowPicBros, setIsShowPicBros] = useState(false)
  
  const { detailData } = useSelector(state => ({
    detailData: state.detail.detailData
  }), shallowEqual)

  function showPicture() {
    setIsShowPicBros(true)
  }

  return (
    <DetailImageListWrapper>
      <div className="images-container">
        <div className="left-image" onClick={showPicture}>
          <img className='item-image' src={detailData?.picture_urls[0]} alt="" />
          <div className="cover"></div>
        </div>
        <div className="right-image">
          {
            detailData.picture_urls?.slice(1, 5).map(item => (
              <div className="item" key={item} onClick={showPicture}>
                <img className='item-image' src={item} alt="" />
                <div className="cover"></div>
              </div>
            ))
          }
        </div>
      </div>
      {
        isShowPicBros && <PictureBrowser pictureUrls={detailData.picture_urls} onClose={ () => setIsShowPicBros(false)} />
      }
    </DetailImageListWrapper>
  )
})

export default DetailImageList