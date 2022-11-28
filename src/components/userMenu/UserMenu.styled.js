import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 60px;
  border: none;
  border-radius: 10px;

  &:hover,
  :focus {
    background-color: #2a404e;
    color: #fafaf8;
    transition: all 300ms ease;
  }
`;

export const UserGreating = styled.p`
  font-size: 21px;
  font-weight: 400;
  margin: 5px;
`;
export const User = styled.p`
  display: flex;
  align-items: center;
  font-size: medium;

  font-weight: 700;
  margin: 5px;
  margin-bottom: 10px;
  color: #525355; ;
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
