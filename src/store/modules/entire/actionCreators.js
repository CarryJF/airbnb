import { CHANGECURRENTPAGE, CHANGEROOMLIST, CHANGETOTALCOUNT, CHANGEISLOADING } from "./constants"
import { getEntireData } from "../../../services/index.js"

export const fetchEntireData = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(changeCurrentPage(page))
    dispatch(changeIsloading(true))
    const res = await getEntireData(getState().entire.currentPage)
    dispatch(changeIsloading(false))
    dispatch(changeRoomList(res.list))
    dispatch(changeTotalCount(res.totalCount))
  }
}

export const changeRoomList = (roomList) => ({
  type: CHANGEROOMLIST,
  roomList
})

export const changeCurrentPage = (currentPage) => ({
  type: CHANGECURRENTPAGE,
  currentPage
})

export const changeTotalCount = (totalCount) => ({
  type: CHANGETOTALCOUNT,
  totalCount
})

export const changeIsloading = (isLoading) => ({
  type: CHANGEISLOADING,
  isLoading
})