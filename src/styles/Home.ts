import styled from 'styled-components';

import menu from '../assets/menu.svg';

export const Container = styled.div`
  div.line {
    width: 70%;
    height: 2px;
    background-color: #E4E4E4;
    border-radius: 40px;

    margin: 0 auto;
    margin-top: 550px;
  }

  @media(max-width: 700px) {
    div.line {
      margin-top: 300px;
    }
  }
`;

export const Header = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 90px;

  ul {
    list-style: none;

    width: 40%;

    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  @media(max-width: 700px) {
    padding: 20px 40px;

    img {
      width: 150px;
    }
    
    ul {
      display: none;
    }
  }
`;

export const MenuBar = styled.button`

  width: 50px;
  height: 60px;
  display: none;
  background-image: url(${menu});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 750px) {
    margin-top: 10px;
    display: block;
  }
`;

export const ListItem = styled.li<{selected: boolean}>`
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.2px; 
    color: ${props => props.selected ? "#FA4A0C" : "#000"} ;

    cursor: pointer;
`;

export const Banner = styled.div`
  width: 100%;
  height: 619px;
  position: relative;
  background: #171010;

  img.banner {
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }

  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    strong {
      margin-top: 70px;
      font-size: 24px;
      font-weight: 500;
      color: #fff;
    }

    h1 {
      margin-top: 20px;
      width: 75%;
      font-size: 54px;
      line-height: 80px;
      letter-spacing: 0.2px;
      color: #fff;

      text-align: center;
    }

    p {
      margin-top: 20px;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 0.2px;
      color: #fff;
      text-align: center;
    }

    > div {

      button:first-of-type{
        margin-right: 16px;
      }
      margin-top: 50px;
      display: flex;
    }
  }

  img.mockup {
    position: absolute;
    top: 125%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media(max-width: 700px) {
    background-color: #fafafa;
     
    img.banner {
      display: none;
    }

    img.mockup {
      top: 110%;
      width: 320px;
    }

    section {
      strong {
      margin-top: 40px;
      font-size: 16px;
      font-weight: 600;
      color: #737373;
      }

      h1 {
        margin-top: 20px;
        width: 90%;
        font-size: 30px;
        line-height: 42px;
        color: #252B42;
      }

      p {
        width: 90%;
        margin-top: 30px;
        font-size: 22px;
        color: #737373;   
      }

      > div {
        button:first-of-type{
          margin-right: 0px;
          margin-bottom: 14px;
        }

        margin-top: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }
  }
`;

export const Button = styled.button<{background: string}>`
  padding: 16px 60px;
  background: ${props => props.background};
  box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.2);
  border-radius: 30px;

  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.1px;
  color: #FFFFFF;

  cursor: pointer;

  border: ${props => props.background === 'transparent' ? '2px solid #fff' : 0};

  :active {
    background-color: #ff9000;
  }
  :hover {
    background-color: ${props => props.background === 'transparent' ? 'rgba(255, 255, 255, 1)' : '#f23404'};
    color: ${props => props.background === 'transparent' && 'rgba(0, 0, 0, 0.8)'};
  }

  @media(max-width: 700px) {
    padding: 16px 40px;
    color: ${props => props.background === 'transparent' && '#f23404'};
    border: ${props => props.background === 'transparent' ? '2px solid #f23404' : 0};
  }
`;

export const AboutApp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 70px;
    font-weight: 600;
    font-size: 40px;
    line-height: 36px;
    letter-spacing: 0.1px;
    color: #000000;

    opacity: 0.8;
  }

  @media(max-width: 700px) {
    h1 {
      margin-top: 50px;
      font-size: 22px;
    }
  }
`;

export const DownloadInfo = styled.div`
  width: 100%;
  height: 510px;
  position: relative;
  background: #171010;

  img {
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }

  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      margin-top: 130px;
      color: #fff;
      font-size: 36px;
      letter-spacing: 0.2px;
    }

    p {
      margin-top: 24px;

      font-size: 20px;
      color: #fff;
      letter-spacing: 0.2px;
    }

    > div {
      button:first-of-type{
        margin-right: 16px;
      }
      
      margin-top: 50px;
      display: flex;
    }
  }

  @media(max-width: 700px) {
    background-color: #252B42;

    section {
      text-align: center;

      h1 {
        width: 80%;
        margin-top: 80px;
        margin-bottom: 12px;
        font-size: 32px;
      }

      p {
        width: 80%;
        line-height: 28px;
        visibility: hidden;
        position: relative;
      }

      p:after {
        visibility: visible;
        position: absolute;
        top: 0;
        left: 0;
        content: "Most calendars are designed for teams.";
      }

      > div {
        button {
          padding: 16px 30px;
          border-radius: 8px;
          visibility: hidden;
          position: relative;
        }

        button:nth-child(1):after {
          visibility: visible;
          position: absolute;
          top: 0;
          left: 0;
          content: "Buy now";
          font-weight: 500;

          padding: 18px 30px;
          border-radius: 8px;
          background-color: #f23404;
          border: 2px solid #f23404;
        }

        button:nth-child(2):after {
          visibility: visible;
          position: absolute;
          top: 0;
          left: 0;
          content: "Try for free";
          color: #fff;
          font-weight: 500;

          padding: 16px 20px;
          border-radius: 8px;
          background-color: transparent;
          border: 2px solid #fff;
        }

        button:first-of-type{
          margin-right: 16px;
        }
        
        margin-top: 50px;
        display: flex;
    }
    }
    img {
      display: none;
    }
  }
`;

export const Footer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    svg {
      margin-left: 20px;
    }

  }
  padding: 20px 40px;

  @media(max-width: 700px) {
    flex-direction: column;

     img { 
       display: none;
     }

     p {
       margin-top: 12px;
     }
  }
`;