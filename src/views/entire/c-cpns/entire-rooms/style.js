import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
  position: relative;
  margin: 40px 0;
  padding: 0 24px;

  .title {
    font-size: 22px;
    font-weight: 600;
    color: #222;
  }

  .rooms-content {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }

  .mask {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0; 
    backdrop-filter: blur(3px);
    background-color: rgba(255,255,255,.1);
  }
`