import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: #000;

  .header {
    display: flex;
    justify-content: flex-end;
    height: 86px;
    padding: 15px 20px 0 0;
    box-sizing: border-box;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    color: #fff;

    .left, .right {
      cursor: pointer;
    }

    .center {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 105vh;
      background-color: #fff;
      overflow: hidden;
      user-select: none;

      img {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .pic-enter {
        opacity: 0;
        transform: translate(${props => props.translate});
      }

      .pic-enter-active {
        opacity: 1;
        transform: translate(0);
        transition: 200ms;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-action {
        opacity: 0;
        transition: 200ms;
      }
    }
  }

  .footer {
    position: relative;
    height: 100px;
    margin-bottom: 24px;

    .footer-container {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      width: 105vh;
      margin: 0 auto;
      color: #fff;

      .footer-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;

        .desc {

        }

        .hidden-pic {
          display: flex;
          align-items: center;

          .picShow {

          }
          
        }

      }

      .footer-bottom {
        position: relative;
        display: flex;
        align-items: center;
        height: ${props => props.isShow ? "67px": 0};
        margin: 10px -5px 0;
        transition: height 350ms;
        overflow: hidden;

        .images {
          flex-shrink: 0;
          width: 100px;
          height: 100%;
          margin: 0 5px;
          opacity: .5;
          user-select: none;

          img {
            width: 100%;
            height: 100%;
          }

          &.active {
            opacity: 1;
          }
        }
      }
    }
  }

  
`