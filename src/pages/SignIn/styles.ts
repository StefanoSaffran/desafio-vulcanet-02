import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch; /* stretch to fill the container */
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 475px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;

    a {
      color: #fff;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }

    > button {
      background: var(--primary);
      color: var(--white);
      border: 0;
      border-radius: 4px;
      padding: 0 20px;
      height: 38px;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  > a {
    color: #fff;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 260px;
  margin: 0 auto 20px;
  color: #ddd;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: 95%;
  background-position: right center;
`;
