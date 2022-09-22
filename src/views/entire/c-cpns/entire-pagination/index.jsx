import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';

import { EntirePaginationWrapper } from './style'
import {fetchEntireData} from "../../../../store/modules/entire/actionCreators.js"


const EntirePagination = memo((props) => {
  const { currentPage, totalCount } = useSelector(state => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount
  }))

  const stateNum = currentPage * 20 + 1
  
  const endNum = (currentPage + 1) + 20
  const totalPage = Math.ceil(totalCount / 20)

  const dispatch = useDispatch()
  function handleChange(e, page) {
    dispatch(fetchEntireData(page - 1))
    window.scrollTo(0, 0)
  }

  return (
    <EntirePaginationWrapper>
      <Stack spacing={2}>
        <div className="page-list">
          <Pagination onChange={handleChange} count={totalPage} />
        </div>
        <div className="desc">
          第{stateNum} - {endNum}个房源，共超过{ totalCount }个
        </div>
      </Stack>
    </EntirePaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination