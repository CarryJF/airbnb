import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDiscountData, getGoodPriceData, getHighScoreData, getHotRecommendData, getLongforData, getPlusRoomData } from "../../services/modules/home";

export const fetchGoodPrice = createAsyncThunk("fetchGoodPrice", (extraInfo, {dispatch}) => {
  getGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfo(res))
  })
  getHighScoreData().then(res => {
    dispatch(changeHighScoreInfo(res))
  })
  getDiscountData().then(res => {
    dispatch(changeDiscountInfo(res))
  })
  getHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfo(res))
  })
  getLongforData().then(res => {
    dispatch(changeLongforInfo(res))
  })
  getPlusRoomData().then(res => {
    dispatch(changePlusRoomInfo(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo: {},
    plusRoomInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendInfo(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongforInfo(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusRoomInfo(state, { payload }) {
      state.plusRoomInfo = payload
    }
  }
})

export const { changeGoodPriceInfo, changeHighScoreInfo, changeDiscountInfo, changeHotRecommendInfo, changeLongforInfo, changePlusRoomInfo } = homeSlice.actions

export default homeSlice.reducer