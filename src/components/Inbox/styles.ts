import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IButtonProps {
  notifications: number;
}

export const Container = styled.div`
  background-color: transparent;
  flex: 1;
`;

export const Header = styled.header`
  height: 64px;
  background-color: var(--white);
  padding: 8px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);

  > h3 {
    color: var(--text);
    text-transform: uppercase;
    font-size: 16px;
    line-height: 18px;
  }

  > div {
    display: flex;
    align-items: center;

    > div {
      margin-right: 20px;
    }

    > button {
      height: 38px;
      border-radius: 4px;
      padding: 0 35px;

      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      text-transform: uppercase;
      text-align: center;

      color: var(--white);
      background: var(--primary);
      box-shadow: 0px 1px 0px #0794b6;

      &:hover {
        background: ${shade(0.08, '#00A7CF')};
      }
    }
  }
`;

export const EmailList = styled.ul`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px - 10px);
  margin: 10px 20px;

  > li {
    display: flex;
    font-weight: bold;
    line-height: 16px;
    width: 100%;
    background: none;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    color: var(--quaternary);

    span {
      &:first-child {
        width: 33%;
        padding-left: 20px;
      }

      &:nth-child(2) {
        width: 20%;
      }

      &:nth-child(3) {
        flex: 1;
      }
    }

    &:first-child {
      margin-bottom: 10px;
    }
  }

  li + li {
    button {
      height: 64px;
      margin-bottom: 5px;
      border: 1px solid var(--icons-border);
      border-radius: 5px;
      align-items: center;
    }
  }
`;

export const Email = styled.button<IButtonProps>`
  display: flex;
  font-size: 15px;
  line-height: 16px;
  color: var(--text);
  width: 100%;
  background: none;
  text-align: left;

  > div {
    width: 8%;
    text-align: center;
    position: relative;

    > span {
      > svg {
        color: var(--icons-alt);
      }
    }
  }

  ${props =>
    props.notifications &&
    css`
      background: var(--white);
      font-weight: bold;

      div {
        > span {
          &::after {
          content: '${props.notifications || ''}';

          display: ${props.notifications ? 'inline' : 'none'};

          background-color: var(--notification);
          color: var(--white);

          border-radius: 12px;

          box-shadow: 0 0 5px 1px var(--white);

          width: auto;
          height: 16px;
          min-width: 10px;
          padding: 0 3px 1px;

          position: absolute;
          left: 0;

          text-align: center;
          font-size: 10px;
          font-weight: bold;
          }
        }
      }
    `}
`;
