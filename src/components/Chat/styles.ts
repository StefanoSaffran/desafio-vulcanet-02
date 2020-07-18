import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IAuthorProps {
  from_guest: boolean;
  seen: boolean;
}

interface IMessageProps {
  from_guest: boolean;
}

export const Container = styled.div`
  background-color: transparent;
  flex: 1;
`;

export const Header = styled.header`
  height: 64px;
  background-color: var(--white);
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);

  > button {
    height: 38px;
    border-radius: 4px;
    padding: 0 30px;

    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-transform: uppercase;
    text-align: center;

    color: var(--white);
    background: var(--primary);

    &:hover {
      background: ${shade(0.08, '#00A7CF')};
    }
  }
`;

export const ChatBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100vh - 64px - 10px);

  position: relative;
`;

export const InfoMessage = styled.div`
  width: min(324px, 20vw);
  height: 44px;
  padding: 0 24px;
  line-height: 16px;

  z-index: 3;

  background-color: #dbf3f8;
  color: var(--gray);
  border-radius: 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: 20px;
  left: calc(50% - min(162px, 10vw));

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    color: var(--darkGray);
  }
`;

export const Messages = styled.div`
  margin-top: 40px;
  padding: 32px 16px 0;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 64px - 48px - 44px - 8px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Author = styled.div<IAuthorProps>`
  display: flex;
  align-items: center;

  margin-top: 12px;

  font-size: 13px;

  > p {
    color: var(--gray);
    margin: 0 15px;

    > strong {
      color: var(--gray);
    }
  }

  svg {
    color: ${({ seen }) => (seen ? '#4fc3f7' : 'var(--icons-alt)')};
  }

  ${props =>
    props.from_guest
      ? css`
          flex-direction: row;
          align-self: flex-start;
        `
      : css`
          flex-direction: row-reverse;
          align-self: flex-end;
        `}
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  background-color: var(--tertiary);
`;

export const Message = styled.div<IMessageProps>`
  max-width: 50%;

  margin-top: 24px;
  padding: 20px 14px;

  color:  var(--darkGray);

  border-radius: 8px;
  position: relative;

  ${props =>
    props.from_guest
      ? css`
          border-top-left-radius: 0;
        `
      : css`
          border-top-right-radius: 0;
        `}

  align-self: ${props => (props.from_guest ? 'flex-start' : 'flex-end')};
  background-color: ${props =>
    props.from_guest ? 'var(--white)' : 'var(--messagesBackground)'};

  &::before {
    content: '';
    width: 0;
    height: 0;
    display: block;

    position: absolute;
    top: -15px;

    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;


    ${props =>
      props.from_guest
        ? css`
            border-left: 15px solid var(--white);
            left: 0;
          `
        : css`
            right: 0;
            border-right: 15px solid var(--messagesBackground);
          `}
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  background-color: var(--white);

  height: 48px;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);
`;

export const MessagesInput = styled.input`
  flex: 1;
  color: var(--text);
  padding: 0 30px;
`;

export const IconsWrapper = styled.div`
  width: 120px;

  display: flex;
  align-items: center;

  > svg {
    margin-right: 12px;

    path {
      color: var(--icons-alt);
    }
  }

  > svg:last-child {
    margin-right: 20px;
  }
`;
