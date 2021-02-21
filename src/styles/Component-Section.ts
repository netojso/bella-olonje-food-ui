import styled, { css } from 'styled-components';

interface ContainerProps {
  reverse?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 30px 150px;
  & + & {
    margin-top: -100px;
  }

  img {
    margin: -50px -50px;
  }

  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    width: 600px;

    strong {
      font-size: 20px;
      line-height: 36px;
      letter-spacing: 0.1px;
      color: #FA4A0C;
    }

    h3 {
      font-size: 32px;
      line-height: 57px;
      letter-spacing: 0.2px;
      color: #252B42;

      width: 400px;

      margin: 20px 0;
    }
  }

  ${props => props.reverse && css`
    flex-direction: row-reverse;

    img {
      margin-right: -150px;
    }
    
    > div {
      margin-left: 80px;
    }
  `}

  @media(max-width: 700px) {

    background-color: #fff;

    img {
      margin-top: -50px;
      margin-bottom: 30px;
      margin-left: ${props => props.reverse ? '-100px': 0};
      width: 300px;
    }

    flex-direction: column-reverse;

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;

      width: 100%;
      margin: 0 auto;

      strong {
        width: 300px;
        font-size: 20px;
        line-height: 36px;
        letter-spacing: 0.1px;
        color: #FA4A0C;
      }

      h3 {
        width: 350px;
        font-size: 28px;
        line-height: 40px;
        letter-spacing: 0.2px;
        color: #252B42;
      }

      p {
        color: #737373;
        font-size: 18px;
        width: 300px;

        margin-bottom: 50px;
      }
    }

  }
`;
