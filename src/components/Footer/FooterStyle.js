import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #fdfdfd;
  padding: 2rem;
  .container_content {
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  a {
    color: #000;
  }

  p {
    text-align: center;
    color: #000;
    font-size: 1.2rem;
  }
  .container_icon {
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .icon {
    margin: 1rem 0.6rem;
    color: #ff9a62;
    font-size: 1.2rem;
  }
  span {
    color: #000;
  }
  .bg {
    border-bottom: 1px solid #ff9a62;
    width: 30%;
    margin: auto;
  }
  @media only screen and (max-width: 678px) {
    background: #fdfdfd;
    padding: 2rem;
    .container_content {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    a {
      color: #000;
    }

    p {
      text-align: center;
      color: #000;
      font-size: 1.2rem;
    }
    .container_icon {
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .icon {
      margin: 1rem 0.6rem;
      color: #ff9a62;
      font-size: 1.2rem;
    }
    span {
      color: #000;
    }
    .bg {
      border-bottom: 1px solid;
      width: 30%;
      margin: auto;
    }
  }
`;
