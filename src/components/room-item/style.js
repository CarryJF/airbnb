import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: ${props => props.itemWidth};

  .inner {
    padding: 8px 8px 12px;

    .img-cover {
      position: relative;
      padding-top: 66.66%;
      box-sizing: border-box;

      .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
    }

    .slider {
      position: relative;

      &:hover {
        .control {
          display: block;
        }
      }

       .control {
        display: none;
      
        .arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 999;
          width: 88px;
          font-size: 20px;
          color: #fff;
          cursor: pointer;
        }

        .left-arrow {
          left: 0;
          background-image: linear-gradient(to right, rgba(0,0,0,.2), rgba(0,0,0,0));
        }

        .right-arrow {
          right: 0;
          background-image: linear-gradient(to left, rgba(0,0,0,.2), rgba(0,0,0,0));
        }
      }

      .dot-box {
        position: absolute;
        bottom: 10px;
        right: 0;
        left: 0;
        z-index: 999;
        width: 80px;
        margin: 0 auto;

        .dot-container {
          flex-shrink: 0;
          width: 14.28%;

          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin: 0 auto;
            background-color: #fff;

            &.active {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }

    .content {
      .desc {
        margin: 12px 0 3px 0;
        font-size: 12px;
        font-weight: 700;
        color: #767676;
      }

      .title {
        margin: 3px 0 5px;
        font-size: 16px;
        font-weight: 800;
        line-height: 22px;
        color: rgb(72, 72, 72);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        margin: 8px 0;
      }

      .star-box {
        display: flex;
        align-items: center;

        .MuiRating-decimal {
          font-size: 12px;
          color: var(--secondary-color);
        }

        .star, .landlord {
          margin-left: 4px;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
`