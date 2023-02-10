import styled from 'styled-components';

interface iProps {
  type: string;
}

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;
export const Aside = styled.aside`
  height: 100vh;
  width: 336px;
  background-color: white;
`;

export const Logo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3rem;
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  gap: 5rem;
`;

export const Item = styled.div<iProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 20%;
  gap: 2rem;
  color: white;
  background-color: ${(props) =>
    props.type == 'active' ? '#EC5161' : 'white'};
  color: ${(props) => (props.type == 'active' ? 'white' : 'black')};
`;
