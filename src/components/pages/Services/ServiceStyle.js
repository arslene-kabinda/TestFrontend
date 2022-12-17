import styled from "styled-components";
export const ServiceConatiner = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  text-align: center;
  padding: 50px;

  .Service_card {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    width: 100%;
  }
  .cards {
    background-color: #ff9a62;
    height: 220px;
    width: 25%;
    border-radius: 5px;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 15px;
  }
  h2 {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;

    text-align: center;
    font-family: "Montserrat", sans-serif;
  }
  h1 {
    left: 0;
    right: 0;
    margin: 0 auto;
    position: relative;
    font-weight: 500;
    padding-bottom: 20px;
    font-size: 40px;
    line-height: 1.3;
    text-transform: capitalize;
    color: #000;
    font-family: "Montserrat", sans-serif;
    &::after {
      border: 3px solid #ff9a62;
      position: absolute;
      width: 50px;
      height: 0;
      left: 50%;
      transform: translateX(-50%);
      top: 60px;
      content: "";
      bottom: 0px;
      margin: 0 auto;
    }
  }
  p {
    font-size: 0.8rem;
    text-align: center;
    color: #fff;
    font-family: "Montserrat", sans-serif;
  }
  .git {
    border: 1px solid black;
  }
  .icon {
    color: #fff;
    font-size: 3rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media only screen and (max-width: 678px) {
    background-color: #191919;
    width: 100%;
    text-align: center;
    padding: 50px;

    .Service_card {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      padding: 10px;
      width: 100%;
    }
    .cards {
      background-color: #ff9a62;
      height: 220px;
      width: 100%;
      border-radius: 5px;
      margin: 0 !important;
      margin-top: 2rem !important;
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 15px;
    }
    h2 {
      font-size: 1rem;
      font-weight: bold;
      color: white;

      text-align: center;
      font-family: "Montserrat", sans-serif;
    }
    h1 {
      left: 0;
      right: 0;
      margin: 0 auto;
      position: relative;
      font-weight: 500;
      padding-bottom: 20px;
      font-size: 2rem;
      line-height: 1.3;
      text-transform: capitalize;
      color: #fff;
      font-family: "Montserrat", sans-serif;
      &::after {
        border: 3px solid #ff9a62;
        position: absolute;
        width: 50px;
        height: 0;
        left: 50%;
        transform: translateX(-50%);
        top: 80px;
        content: "";
        bottom: 0px;
        margin: 0 auto;
      }
    }
    p {
      font-size: 0.8rem;
      text-align: center;
      color: white;
      font-family: "Montserrat", sans-serif;
    }
    .git {
      border: 1px solid black;
    }
    .icon {
      color: #ff9a62;
      font-size: 3rem;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`;
