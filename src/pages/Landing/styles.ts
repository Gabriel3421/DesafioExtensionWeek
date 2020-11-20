import styled from 'styled-components';
import bgImg from '../../assets/bg.jpg';

export const Container = styled.div`
  overflow: hidden;
  line-height: 1.5;
  .check {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    .video {
      align-self: center;
    }
  }

  @media screen and (max-width: 400px) {
    .check {
      .video {
        width: 300px;
        height: 200px;
      }
    }
  }
`;
export const Title = styled.h1`
  font-size: 30px;
  margin: 50px 0;
  text-align: center;
`;
export const SubTitle = styled.h2`
  font-size: 20px;
  margin: 50px 0;
  text-align: center;
`;
export const Header = styled.header`
  position: absolute;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 2;
  .logo {
    img {
      height: 30px;
      z-index: 2;
    }
  }
  .group {
    display: flex;
    width: 30%;
    margin-right: 30px;
    justify-content: space-between;
    align-items: center;
    a {
      color: #fff;
      text-decoration: none;
      transition: border-bottom 0.2s;
      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }
  @media screen and (max-width: 400px) {
    .group {
      display: none;
    }
  }
`;
export const Main = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  height: 100vh;
  width: 100%;
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    .frase {
      font-size: 40px;
    }
    .autor {
      font-size: 20px;
    }
    .flecha {
      position: absolute;
      bottom: 20px;
      animation: cimaBaixo 3s infinite;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
    }
    @keyframes cimaBaixo {
      from {
        transform: translate(0, -70%);
      }
      50% {
        transform: translate(0, 20%);
      }
      to {
        transform: translate(0, -70%);
      }
    }
  }
  @media screen and (max-width: 400px) {
    .container {
      padding: 10px;
      .frase {
        font-size: 30px;
      }
      .autor {
        font-size: 20px;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 50px;
  text-align: justify;
  .section {
    display: flex;
    flex-direction: column;
    .network-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;

      p {
        background-color: #292962;
        padding: 10px 20px;
        font-size: 17px;
        border-radius: 10px;
        -webkit-box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.96);
        box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.96);
      }
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
        -webkit-box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.5);
        box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.5);
      }
    }
    .softskill {
      width: 90%;
      justify-self: center;
      align-self: center;
      background-color: #292962;
      padding: 20px;
      border-radius: 10px;
      font-size: 20px;
      -webkit-box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.96);
      box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.96);
    }
    .skills {
      margin: 30px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      max-height: 300px;
      img {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        background-color: #fff;
        border-radius: 10px;
        -webkit-box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.5);
        box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.5);
      }
    }
  }
  @media screen and (max-width: 400px) {
    padding: 10px;
    img {
      display: none;
    }
    .section {
      display: flex;
      flex-direction: column;
      .network-group {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0px;
      }
      .skills {
        margin: 30px 0;
        display: grid;
        grid-template-columns: 1fr;
        gap: 0px;
        max-height: 300px;
      }
    }
  }
`;

export const CardContainer = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  #subir {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    #subir {
      margin: 30px 0;
    }
  }
`;
export const Card = styled.div`
  padding: 40px;
  width: 260px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #292962;
  border-radius: 10px;
  margin: 0 30px;
  -webkit-box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.96);
  box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.96);
  svg {
    padding-bottom: 20px;
    border-bottom: 2px solid white;
  }
  span {
    font-weight: 500;
    margin: 30px 0;
  }
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const CardContainer2 = styled.div`
  min-height: 300px;
  width: 100%;
  display: grid;
  grid-template-areas:
    'd1 . d2'
    '. d3 .'
    'd4 . d5';
  margin: 30px 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #292962;
    border-radius: 10px;
    margin: 0 30px;
    -webkit-box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.96);
    box-shadow: 4px 10px 19px 1px rgba(0, 0, 0, 0.96);
    transition: transform 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 400px) {
    grid-template-areas:
      'd1'
      'd2'
      'd3'
      'd4'
      'd5';
    gap: 30px;
  }
`;

export const Footer = styled.footer`
  height: 250px;
  background-color: #120f1d;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1,
  h2 {
    margin: 10px;
  }
  .rodape {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .group {
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      a {
        color: #fff;
        text-decoration: none;
        transition: border-bottom 0.2s;
        &:hover {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
`;
