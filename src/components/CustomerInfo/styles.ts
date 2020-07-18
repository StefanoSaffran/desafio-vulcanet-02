import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: var(--white);
  width: 296px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.2);

  padding: 20px 20px;
  z-index: 3;
`;

export const Customer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  background-color: var(--tertiary);
`;

export const CustomerData = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    display: block;
    color: var(--text);
  }

  > span {
    font-size: 13px;
    color: var(--quaternary);
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  margin: 20px 0 18px;

  > button {
    flex: 1;
    background: transparent;
    border: 1px solid var(--icons-border);
    box-shadow: 0px 1px 0px var(--icons-border);
    height: 37px;
    border-radius: 4px;

    &:hover {
      > svg path {
        color: ${shade(0.15, '#00A7CF')};
      }
    }
  }

  > button + button {
    margin-left: 10px;

    &:hover {
      > svg path {
        color: ${shade(0.15, '#E33E1A')};
      }
    }
  }
`;

export const LatestChats = styled.div`
  > h5 {
    color: var(--quaternary);
    text-transform: uppercase;
    font-size: 12px;
    line-height: 22px;
  }
`;

export const ChatInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  svg {
    width: 18px;
    height: 18px;
    path {
      color: var(--icons-alt);
    }
  }

  > span {
    color: var(--text);
    margin-left: 8px;
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Notes = styled.div`
  margin-top: 26px;

  > h5 {
    color: var(--quaternary);
    text-transform: uppercase;
    line-height: 22px;
    font-size: 12px;
  }

  > span {
    color: var(--text);
    margin-top: 12px;
    line-height: 1.6;
    font-size: 12px;
  }
`;

export const ContactInfo = styled.div`
  margin-top: 24px;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;

  svg path {
    color: var(--icons-alt);
  }

  & + div {
    margin-top: 12px;
  }
`;

export const ContactData = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 11px;
    display: block;
    color: #8fbad6;
    text-transform: uppercase;
  }

  > span {
    font-size: 14px;
    line-height: 1.3;
    color: var(--text);
  }
`;
