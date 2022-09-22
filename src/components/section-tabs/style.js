import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  padding: 16px 0;
  
  .item {
    flex-shrink: 0;
    min-width: 120px;
    padding: 14px 16px;
    border: 0.8px solid #D8D8D8;
    border-radius: 3px;
    margin-right: 16px;
    box-shadow: 0 1px 2px rgba(0,0,0,15%);
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    background-color: white;
    cursor: pointer;

    &.active {
      color: white;
      background-color: var(--secondary-color);
    }

    &:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,15%);
    }
  }
`