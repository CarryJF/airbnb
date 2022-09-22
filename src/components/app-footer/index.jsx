import React, { memo } from 'react'
import {footerList} from "../../assets/footer-list.js"
import { AppFoorWrapper } from './style.js'

const AppFooter = memo(() => {
  console.log(footerList)
  return (
    <AppFoorWrapper>
      <div className="wrapper">
        <div className='content'>
          {
            footerList.map(item => (
              <div className="item" key={item.title}>
                <div className='title'>{item.title}</div>
                <ul className='iten-container'>
                  {
                    item.list.map(iten => <li className='iten' key={iten}>{iten}</li>)
                  }
                </ul>
              </div>
            ))
          }
        </div>
        <div className="hint">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
        </div>
      </div>
    </AppFoorWrapper>
  )
})

export default AppFooter