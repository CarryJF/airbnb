import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { throttle } from 'underscore'

import classNames from "classnames"

import CloseSvg from '../../assets/svg/close-svg'
import HiddenBottomArrow from '../../assets/svg/hidden-bottom-arrow'
import LeftArrowSvg from '../../assets/svg/left-arrow-svg'
import RightArrowSvg from '../../assets/svg/right-arrow-avg'
import DotList from '../dot-list'
import { PictureBrowserWrapper } from './style'
import HiddenTopArrow from '../../assets/svg/hidden-top-arrow'




const PictureBrowser = memo((props) => {
  
  const { pictureUrls = [] } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translate, setTranslate] = useState("100%")
  const [showPic, setShowPic] = useState(true)
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "visible"
    }
  }, [])
  
  function closeBro() {
    if (props.onClose) props.onClose()
  }
  
  const currentIndexRef = useRef()
  currentIndexRef.current = currentIndex

  const turnNext = useMemo(
    () =>
      throttle(function (isNext = true) {
        isNext ? setTranslate("100%") : setTranslate("-100%")
        let index = isNext ? currentIndexRef.current + 1 : currentIndexRef.current - 1
        if (index < 0) index = pictureUrls.length - 1
        if (index > pictureUrls.length - 1) index = 0
        setCurrentIndex(index)
      }, 1000),
    [pictureUrls.length]
  )

  function selectPic(index) {
    setTranslate(index > currentIndex ? "100%" : "-100%")
    setCurrentIndex(index)
  }

  function changeHidden() {
    setShowPic(!showPic)
  }
  
  return (
    <PictureBrowserWrapper translate={translate} isShow={showPic}>
      <div className="header">
        <div onClick={closeBro}>
          <CloseSvg />
        </div>
      </div>
      <div className="content">
        <div className="left" onClick={() => turnNext(false)}>
          <LeftArrowSvg width="77" height="77"/>
        </div>
        <div className="center">
          <SwitchTransition mode='in-out'>
            <CSSTransition classNames="pic" key={pictureUrls[currentIndex]} timeout={200}>
                <img className='pic' src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="right" onClick={() => turnNext(true)}>
          <RightArrowSvg width="77" height="77"/>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="desc">{currentIndex + 1}/{pictureUrls.length}：Fully equipped kitchen in each suite</div>
            <div className="hidden-pic" onClick={changeHidden}>
              <div className="picShow">{showPic ? "隐藏" :"显示" }照片列表</div>
              {
                showPic ? <HiddenBottomArrow />: <HiddenTopArrow/>
              }
              
            </div>
          </div>
          <div className="footer-bottom">
            {
              showPic && <DotList currentIndex={currentIndex}>
                {
                  pictureUrls.map((item, index) => (
                    <div
                      className={classNames("images",
                        { active: currentIndex === index ? "active" : "" })}
                      key={item}
                      onClick={() => selectPic(index)}
                    >
                      <img key={item} src={item} alt="" />
                    </div>
                  ))
                }
              </DotList>
            }
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser