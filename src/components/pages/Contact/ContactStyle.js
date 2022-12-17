import styled from "styled-components";
import bg from "../../assets/c.jpg";

export const ContactContainer = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${bg});

  background-size: cover;
  padding: 1rem;
  h1 {
    left: 0;
    right: 0;
    margin: 0 auto;
    position: relative;
    font-weight: 500;
    padding-bottom: 10px;
    padding-top: 20px;
    font-size: 40px;
    line-height: 1.3;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    &::after {
      border: 3px solid #ff9a62;
      position: absolute;
      width: 50px;

      left: 50%;
      transform: translateX(-50%);
      top: 80px;
      content: "";
      bottom: 0px;
      margin: 0 auto;
    }
  }
  .form_Container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    form {
      border: 1px solid #ff9a62;
      border-radius: 10px;
      margin: 2rem;
      padding: 2rem 1rem;
      width: 50%;
      .container_btn {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bg {
        background-color: #ff9a62;
        color: #fff;
        font-size: 1.2rem;
        border-radius: 50px;
        padding: 0.6rem 2.3rem;
      }
    }
    .text {
      margin: 1rem;
      padding: 0.3rem;

      border: 2px solid #ff9a62;
      border-radius: 3px;
      label {
        color: #fff;
      }
    }

    .phone_number {
      margin: 1rem;
      width: 50%;
      padding: 0.3rem;
      border: 2px solid #ff9a62;
      border-radius: 3px;
    }
    .email {
      margin: 1rem;
      width: 50%;
      padding: 0.3rem;
      border: 2px solid #ff9a62;
      border-radius: 3px;
      color: #fff;
    }
    .d-flex {
      justify-content: center;
      width: 100%;
      align-items: center;
      label {
        color: #fff;
      }
    }
  }
  @media only screen and (max-width: 678px) {
    background: rgba(33, 33, 33, 0.97);
    padding: 1rem;
    h1 {
      left: 0;
      right: 0;
      margin: 0 auto;
      position: relative;
      font-weight: 500;
      padding-bottom: 10px;
      padding-top: 20px;
      font-size: 2rem;
      line-height: 1.3;
      text-align: center;
      text-transform: capitalize;
      color: #fff;
      font-family: "Montserrat", sans-serif;
      &::after {
        border: 3px solid #ed138d;
        position: absolute;
        width: 50px;

        left: 50%;
        transform: translateX(-50%);
        top: 80px;
        content: "";
        bottom: 0px;
        margin: 0 auto;
      }
    }
    .form_Container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      form {
        border: 1px solid #ffffff54;
        border-radius: 10px;
        margin: 0 !important;
        margin-top: 2rem !important;
        padding: 2rem 1rem;
        width: 100%;
        .container_btn {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bg {
          background-color: #ed138d;
          color: #fff;
          font-size: 1.2rem;
          border-radius: 50px;
          padding: 0.6rem 2.3rem;
        }
      }
      .text {
        margin: 1rem;
        padding: 0.3rem;
        background: rgba(33, 33, 33, 0.97);
        border-radius: 3px;
        label {
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .phone_number {
        margin: 1rem;
        width: 100%;
        padding: 0.3rem;
        background: rgba(33, 33, 33, 0.97);
        border-radius: 3px;
      }
      .email {
        margin: 1rem;
        width: 100%;
        padding: 0.3rem;
        background: rgba(33, 33, 33, 0.97);
        border-radius: 3px;
      }
      .d-flex {
        justify-content: center;
        width: 100%;
        align-items: center;
        flex-wrap: wrap;

        label {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
`;
