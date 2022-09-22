import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    box-shadow: 0px 1px 1px 1px rgb(0 0 0 / 14%);
    background-color: white;
    cursor: pointer;

    &.left-arrow {
      left: -10px;
    }

    &.right-arrow {
      right: -10px;
    }
  }

  .scroll-container {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: 250ms;
    }
  }
`