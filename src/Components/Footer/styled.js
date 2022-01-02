import styled from "styled-components";
import { backgroundColor } from "../Shared/masterStyled";
export const FOOTER = styled.footer`
  background-color: #222;
  margin-top: 40px;
  padding: 20px 0;
  & > :first-child {
    color: white;

    display: flex;
    gap: 28px;
    flex-direction: column;
    position: relative;
    bottom: 0;
    @media (min-width: 676px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;
export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > a {
    :hover {
      color: ${backgroundColor.purple};
    }
  }
`;

export const GetIntouch = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5 0;
  gap: 1rem;
  justify-content: center;

  & > p {
    line-height: 1.8rem;
    flex: 0 0 50%;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > h4 {
    flex: 0 0 100%;
    margin-bottom: 20px;
  }
  & > a {
    font-size: 2.2rem;
    margin-right: 20px;

    :hover {
      color: ${backgroundColor.purple};
    }
  }
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  & > form {
    display: flex;
    gap: 5%;

    & > [type="email"] {
      width: 67%;
      height: 28px;
      padding: 0 6px;
      font-size: 1.2rem;
      color: ${backgroundColor.purple};
      background: none;
      border: none;
      border-bottom: 1px solid ${backgroundColor.purple};
      :focus {
        outline: none;
      }
    }
    .Submit {
      font-size: 0.8rem;
    }
  }
  &h4 > {
    flex: 0 0 100%;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > :first-child {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  & > :last-child {
    padding: 20px 0;
    text-align: center;
    .color {
      color: ${backgroundColor.purple};
    }
  }

  @media (min-width: 676px) {
    flex: 0 0 100%;
  }
`;
