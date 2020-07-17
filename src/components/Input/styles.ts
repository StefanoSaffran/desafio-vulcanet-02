import styled from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: var(--white);
  color: #666;
  border: 1px solid #e0e7ed;
  border-radius: 4px;
  padding: 0 16px;
  height: 38px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin: 10px 0;
  }

  input {
    flex: 1;
    background: var(--white);
    border: 0;
  }

  svg {
    margin-right: 16px;
    color: #c7d7e2;
  }
`;
