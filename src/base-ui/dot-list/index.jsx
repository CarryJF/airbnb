import React, { memo, useRef, useEffect } from 'react'
import {DotListWrapper} from "./style.js"

const DotList = memo((props) => {
  const dotListRef = useRef()
  const currentIndex = props.currentIndex

  useEffect(() => {
    // 包含块ref
    const containerRef = dotListRef.current
    // 元素的侧边距和自身宽
    const dotItem = containerRef.children[currentIndex]
    console.log(dotItem)
    const dotItemWidth = dotItem.clientWidth
    const dotItemOffset = dotItem.offsetLeft
    // 展示框的宽和滚动长度
    const listScrollWidth = containerRef.scrollWidth
    const listClientWidth = containerRef.clientWidth
    const maxSlider = listScrollWidth - listClientWidth
    // 需要移动的距离
    let totalSliderWidth = dotItemOffset + (dotItemWidth / 2) - (listClientWidth / 2)
    // 前三个时不需移动
    if (totalSliderWidth < 2) totalSliderWidth = 0
    if (totalSliderWidth > maxSlider) totalSliderWidth = maxSlider
    containerRef.style.transform = `translate(${-totalSliderWidth}px)`
  }, [currentIndex])

  return (
    <DotListWrapper>
      <div className="dot-list" ref={dotListRef}>
        {
          props.children
        }
      </div>
    </DotListWrapper>
  )
})

export default DotList