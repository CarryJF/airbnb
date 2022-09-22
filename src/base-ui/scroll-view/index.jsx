import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import LeftArrowSvg from '../../assets/svg/left-arrow-svg'
import RightArrowSvg from '../../assets/svg/right-arrow-avg'
import { ScrollViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 获取滚动的整体DOM
  const scrollContentRef = useRef()
  // 判断按钮是否能显示
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  // 记录计算可滚动值
  const calculateRef = useRef()
  // 获取当前索引
  const currentIndexRef = useRef(0)

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    const calculateWidth = scrollWidth - clientWidth
    calculateRef.current = calculateWidth

    if (calculateWidth > 0) setShowRight(true)
    if (!currentIndexRef.current) setShowLeft(false)
  }, [])

  const turnTo = useCallback(function (turnNum) {
    currentIndexRef.current += turnNum
    const index = currentIndexRef.current
    const slipe = scrollContentRef.current.children[index].offsetLeft
    scrollContentRef.current.style.transform = `translate(-${slipe}px)`
    setShowRight(calculateRef.current > slipe)
    setShowLeft(!!index)
  }, [])

  return (
    <ScrollViewWrapper>
      {
        showLeft &&
        <div className='arrow left-arrow' onClick={() => turnTo(-1)}>
          <LeftArrowSvg/> 
        </div>
      }
      {
        showRight &&
        <div className='arrow right-arrow' onClick={() => turnTo(1)}>
            <RightArrowSvg/>
        </div>
      }
      <div className="scroll-container">
        <div className='scroll-content' ref={scrollContentRef}>
          {
            props.children
          }
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView