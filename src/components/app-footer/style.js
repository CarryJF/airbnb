import styled from "styled-components";

export const AppFoorWrapper = styled.div`
  margin: 120px 0 0;
  border-top: 1px solid rgba(0,0,0,.2);

  .wrapper {
    width: 1080px;
    margin: 0 auto; 

    .content {
      display: flex;
      padding: 48px 24px 16px;
      border-bottom: 1px solid rgba(0,0,0,.2);

      .item {
        flex: 1;
        font-weight: 700;

        .title {

        }

        .iten-container {
          margin-top: 16px;

          .iten {
            margin-bottom: 4px;
            line-height: 18px;
            color: #767676;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .hint {
      padding: 20px;
      margin-top: 16px;
      margin-bottom: 48px;
      text-align: center;
    }
  }

  
`