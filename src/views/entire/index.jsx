import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'
import {fetchEntireData} from "../../store/modules/entire/actionCreators.js"
import EntirePagination from './c-cpns/entire-pagination'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireData())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire