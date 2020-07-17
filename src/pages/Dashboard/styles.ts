import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;
  background: var(--background);
`;

export const Content = styled.div`
  margin-top: 10px;
  border-top-left-radius: 15px;
  background: var(--contentBackground);

  flex: 1;
  display: flex;
  overflow: hidden;
`;
