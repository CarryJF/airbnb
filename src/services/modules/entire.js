import {bnbRequest} from "../request/index"

export function getEntireData(offset = 0, size = 20) {
  return bnbRequest.get({
    url: `http://codercba.com:1888/airbnb/api/entire/list?offset=${offset}&size=${size}`,
    
  })
}