import styled from 'styled-components';

export const ContactField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  margin: 5px;
`;

export const Contact = styled.p`
  display: flex;
  align-items: center;
  color: #d4d4d4;
  font-weight: 700;
  font-size: large;
`;

export const NumberWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Number = styled.p`
  display: block;
  font-weight: 700;
  font-size: medium;
  margin: 0;
  margin-right: 50px;
  color: #d4d4d4;
`;

export const Button = styled.div`
  margin-left: auto;

  padding: 3px 15px 3px 15px;
  border: none;
  font-weight: normal;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #ef4444;
    color: #fff;
  }
`;
