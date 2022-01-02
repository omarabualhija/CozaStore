import styled from "styled-components";
import { backgroundColor } from "../../Components/Shared/masterStyled";

export const PRODUCTDETAILS = styled.div`
  @media (min-width: 676px) {
    margin-top: 55px;
  }
  & > :first-child {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;

    .slider-MW {
      max-width: 550px;
      padding: 20px;
    }
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Details = styled.div`
  margin-top: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid;
  padding: 35px;
  font-size: 1rem;
  @media (min-width: 997px) {
    font-size: 1rem;
  }

  & > h4,
  > p,
  > span {
    display: block;
    margin-bottom: 1rem;
  }

  & > :nth-child(6),
  > :nth-child(7),
  > :nth-child(8) {
    margin: auto;
  }
`;
