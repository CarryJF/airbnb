import styled from "styled-components";

const imgHover = `
  &:hover {
    .item-image {
      transform: scale(1.2);
    }
    .cover {
      opacity: 0;
    }
  }
`

const cover = `
  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0,0,0,.4);
    transition: opacity 350ms;
  }
`

export const DetailImageListWrapper = styled.div`
  .images-container {
    display: flex;

    &:hover {
      .left-image, .right-image .item {
        .cover {
          opacity: 1;
        }
      }
      
    }

    .left-image {
      position: relative;
      width: 50%;
      border: 1px solid #000;
      overflow: hidden;

      .item-image {
        width: 100%;
        transition: transform 350ms;
      }

      ${cover}

      ${imgHover}
    }

    .right-image {
      display: flex;
      flex-wrap: wrap;
      width: 50%;

      .item {
        position: relative;
        flex-shrink: 0;
        width: 50%;
        border: 1px solid #000;
        overflow: hidden;
        
        .item-image {
          width: 100%;
          transition: transform 350ms;
        }

        ${cover}

        ${imgHover}
      }
    }
  }
`