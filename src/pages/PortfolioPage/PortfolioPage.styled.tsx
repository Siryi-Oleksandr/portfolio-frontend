import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;

// TODO Change widths to normal after adding theme
background-color: skyblue;

  @media screen and (min-width: 480px) {
    max-width: 450px;
  }

  @media screen and (min-width: 768px) {
    max-width: 748px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1150px;
  }
`;