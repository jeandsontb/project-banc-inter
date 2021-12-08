import styled from "styled-components"

export const DashboardBackground = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background2};
`;

export const BodyContainer = styled.main`
  width: 80%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  > div {
    flex: 1;

    & > div {
      margin-bottom: 20px;
    }

    &:nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const InLineTitle = styled.div`
  display: flex;
  width: 100%;
`;

export const InLineContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;

  div {
    flex: 4;
    margin-right: 20px;
  }

  button {
    flex: 1;
  }
`;
