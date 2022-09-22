import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { RoomItemWrapper } from './style'
import { Rating } from '@mui/material'
import LeftArrowSvg from '../../assets/svg/left-arrow-svg'
import RightArrowSvg from '../../assets/svg/right-arrow-avg'
import { Carousel } from 'antd';
import DotList from '../../base-ui/dot-list'
import classNames from "classnames"
import { useNavigate } from 'react-router-dom'

const RoomItem = memo((props) => {
  const sliderRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  const { roomItem, itemWidth = "25%" } = props

  function turn(isRight = true, e) {
    console.log(e)
    e.stopPropagation()
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    let index = isRight ? currentIndex + 1 : currentIndex - 1
    if (index < 0) index = roomItem.picture_urls.length - 1
    if (index > roomItem.picture_urls.length - 1) index = 0
    setCurrentIndex(index)
  }

  const homeRomItemPic = (
    <div className="img-cover">
      <img className='image' src={roomItem.picture_url} alt="" />
    </div>
  )

  const entireRoomItemPic = (
    <div className="slider">
      <div className="control">
        <div className="arrow left-arrow" onClick={e => turn(false, e)}>
          <LeftArrowSvg width="30" height="30" />
        </div>
        <div className="arrow right-arrow" onClick={e => turn(true, e)}>
          <RightArrowSvg width="30" height="30" />
        </div>
      </div>
      <Carousel ref={sliderRef} dots={false}>
        {
          roomItem.picture_urls?.map(item => (
            <div className="img-cover" key={item}>
              <img className='image' src={item} alt="" />
            </div>
          ))
        }
      </Carousel>
      <div className="dot-box">
        <DotList currentIndex={currentIndex}>
          {
            roomItem.picture_urls?.map((item, index) => (
              <div className='dot-container' key={item}>
                <div className={classNames("dot", { active: index === currentIndex })}></div>
              </div>
            ))
          }
        </DotList>
      </div>
    </div>
  )

  const navigator = useNavigate()
  function navigatorTo() {
    navigator('/detail')
  }

  return (
    <RoomItemWrapper itemWidth={itemWidth} onClick={navigatorTo}>
      <div className="inner">
        {
          !roomItem.picture_urls ? homeRomItemPic : entireRoomItemPic
        }
        
        <div className="content">
          <div className="desc" style={{ color: roomItem.verify_info.text_color}}>{roomItem.verify_info.messages.join(" · ")}</div>
          <div className="title">{roomItem.name}</div>
          <div className="price">{roomItem.price_format}/晚</div>
          <div className='star-box'>
            <Rating name="half-rating-read" defaultValue={roomItem.star_rating ?? 0} precision={0.5} readOnly />
            <span className='star'>{roomItem.reviews_count}</span>
            {
              roomItem.bottom_info && <span className='landlord'> ·  {roomItem.bottom_info?.content}</span>
            }
          </div> 
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  roomItem: PropTypes.object
}

export default RoomItem