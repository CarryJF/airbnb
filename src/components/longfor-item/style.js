import styled from "styled-components";

export const LongforItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;

  .inner {
    position: relative;
    padding: 0 8px;

    .image {
      width: 100%;
    }

    .img-cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40%;
      margin: 0 8px;
      background-image: linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0));
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom: 32px;
      color: white;

      .city {
        font-size: 18px;
        font-weight: 700;
      }
      .price {
        margin-top: 5px;
      }
    }
  }
`