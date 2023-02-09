import styled from 'styled-components';

export const Form = styled.form`
  button {
    width: 100%;
    height: 48px;
    background: #ec5161;
    border-radius: 24px;
    padding: 10px;
    color: white;
    border: #ec5161;
  }
  input {
    display: block;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ec5161;
    padding: 20px;
    width: 100%;
    margin: 10px 0px;
  }
  width: 100%;
`;

export const Divi = styled.div``;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  width: 20%;
  height: 40%;
  background-color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #ec5161;
  border-radius: 20px;
  padding: 2.1%;
  @media (max-width: 768px) {
    width: 90%;
    padding: 8%;
  }
`;
