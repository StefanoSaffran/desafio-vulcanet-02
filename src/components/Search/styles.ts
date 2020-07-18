import styled from 'styled-components';
import { IProps } from '.';

export const Container = styled.div<IProps>`
  width: ${props =>
    props.has_background ? '100%' : 'max(120px, min(280px, 20vw))'};
  position: relative;

  border-radius: 4px;
  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.3);

  > input {
    width: 100%;
    height: 38px;

    padding: 0 30px 0 10px;
    border-radius: 7px;

    color: ${props =>
      props.has_background ? 'var(--white)' : 'var(--darkGray)'};
    background-color: ${props =>
      props.has_background ? 'var(--tertiary)' : 'transparent'};
    font-size: 16px;
  }

  > svg {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 18px;
    height: 18px;

    transition: 280ms ease-in-out;

    path {
      color: ${props =>
        props.has_background ? 'var(--white)' : 'var(--icons-alt)'};
    }
  }
`;
