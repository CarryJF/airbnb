import { bnbRequest } from "../request/index"

export function getGoodPriceData() {
  return bnbRequest.get({
    url: "/home/goodprice"
  }) 
}

export function getHighScoreData() {
  return bnbRequest.get({
    url: "/home/highscore"
  })
}

export function getDiscountData() {
  return bnbRequest.get({
    url: "/home/discount"
  })
}

export function getHotRecommendData() {
  return bnbRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getLongforData() {
  return bnbRequest.get({
    url: "/home/longfor"
  })
}

export function getPlusRoomData() {
  return bnbRequest.get({
    url: "/home/plus"
  })
}