import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  background: transparent;

  padding: 12px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  svg {
    width: 16px;
    height: 16px;

    color: var(--darkGray);
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    display: block;
    color: var(--white);
  }

  > span {
    font-size: 13px;
    color: var(--secondary);
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 12px;
  padding: 0 12px;

  > input {
    width: 100%;
    height: 38px;

    padding: 0 30px 0 10px;
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    color: var(--white);
    background: rgba(255, 255, 255, 0.15);
    font-size: 16px;
  }

  > svg {
    width: 20px;
    height: 20px;
    color: var(--white);

    position: absolute;
    top: 9px;
    right: 22px;

    transition: 280ms ease-in-out;
  }
`;
