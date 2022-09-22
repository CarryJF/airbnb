import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
  display: flex;
  padding: 8px 24px;
  border: 1px solid rgb(220, 224, 224);
  border-width: 1px 0 1px;

  .item {
    padding: 6px 12px;
    margin-right: 10px;
    border: 1px solid rgb(220, 224, 224);
    border-radius: 3px;
    cursor: pointer;

    &.active {
      color: white;
      background-color: var(--secondary-color);
    }
  }
`