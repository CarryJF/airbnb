import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .desc {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;

    .active {
      color: var(--secondary-color);
    }

    .svg {
      margin-left: 6px;
    }
  }
`