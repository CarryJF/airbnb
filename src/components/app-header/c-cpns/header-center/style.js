import styled from "styled-components";
import theme from "@/assets/theme";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 290px;
  height: 46px;
  padding-left: 8px;
  margin: -1px;
  border: 1px solid #DDDDDD;
  border-radius: 46px;
  box-shadow: 0px 1px 2px rgba(0,0,0,8%), 0px 4px 12px rgba(0,0,0,5%);
  ${theme.mixin.boxShadow}

  .left {
    padding: 0 16px;
    font-weight: 600;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin: 7px 7px 7px 0;
    border-radius: 50%;
    background-color: var(--primary-color);
    cursor: pointer;
  }
`