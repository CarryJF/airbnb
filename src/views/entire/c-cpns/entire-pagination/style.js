import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .page-list {

    .Mui-selected {
      background-color: #222;
      color: #fff;
    }

    .MuiPaginationItem-page {
      margin: 0 8px;
    }
  }

  .desc {
    margin-top: 16px;
    text-align: center;
    color: #222;
  }
`