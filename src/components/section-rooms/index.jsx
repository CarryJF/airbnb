import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { SectionRoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props
  return (
    <SectionRoomsWrapper>
      <div className='room-list'>
        {
          roomList?.slice(0, 8).map(item => <RoomItem roomItem={item} itemWidth={itemWidth}  key={item.id } />)
        }
      </div>
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms