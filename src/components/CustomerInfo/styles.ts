import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--white);
  width: 296px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.2);

  padding: 20px 20px;
  z-index: 2;
`;

export const Customer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  background-color: var(--quinary);
`;

export const CustomerData = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    display: block;
    color: #222;
  }

  > span {
    font-size: 13px;
    color: #79accd;
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
    border: 1px solid #e5e5e5;
    box-shadow: 0px 1px 0px #e5e5e5;
    height: 37px;
    border-radius: 4px;
  }

  > button + button {
    margin-left: 10px;
  }
`;

export const LatestChats = styled.div`
  > h5 {
    color: #79accd;
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
      color: #a7b6c2;
    }
  }

  > span {
    color: #222;
    margin-left: 8px;
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Notes = styled.div`
  margin-top: 26px;

  > h5 {
    color: #79accd;
    text-transform: uppercase;
    line-height: 22px;
    font-size: 12px;
  }

  > span {
    color: #222;
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
    color: #a7b6c2;
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
    color: #222;
  }
`;
