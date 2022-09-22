import React, { memo } from 'react'
import { useSelector, shallowEqual } from "react-redux"

import RoomItem from '../../../../components/room-item'
import { EntireRoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const { totalCount, roomList, isLoading } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  return (
    <EntireRoomsWrapper>
      <h2 className='title'>{totalCount}多处住宿</h2>
      <div className="rooms-content">
        {
          roomList.length && roomList.map(item => <RoomItem key={item._id} roomItem={item} itemWidth='20%' />)
        }
      </div>
      {
        isLoading && <div className="mask"></div>
      }
    </EntireRoomsWrapper>
  )
})

export default EntireRooms