import styled from "styled-components"
import theme from "@/assets/theme"

const display = `
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px; 
  margin: 0 -3px;
`


export const RightWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--text-color);
  font-weight: 600;

  .login {
    ${display}
    width: 58px;
    height: 42px;
    cursor: pointer;
  }

  .register {
    ${display}
    width: 58px;
    height: 42px;
    cursor: pointer;
  }

  .global {
    ${display}
    width: 46px;
    height: 42px;
    margin-right: 8px;
    cursor: pointer;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 58px;
    height: 30px;
    padding: 5px;
    padding-left: 12px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 21px;
    cursor: pointer;
    
    ${theme.mixin.boxShadow}
  }

  .MuiButtonBase-root  {
    font-size: 14px;
    padding: 4px 16px;
  }

  .llkJwr {
    z-index: 999;

    .dwGWZT {
      cursor: pointer;
    }
  }
`