import { CHANGETOTALCOUNT, CHANGECURRENTPAGE, CHANGEROOMLIST, CHANGEISLOADING } from "./constants.js"

const initialState = {
  roomList: [],
  currentPage: 0,
  totalCount: 0,
  isLoading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEROOMLIST:
      return { ...state, roomList: action.roomList }
    case CHANGECURRENTPAGE:
      return { ...state, currentPage: action.currentPage }
    case CHANGETOTALCOUNT:
      return { ...state, totalCount: action.totalCount }
    case CHANGEISLOADING:
      return { ...state, isLoading: action.isLoading}
    default:
      return state
  }
}

export default reducer