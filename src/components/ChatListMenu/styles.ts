import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
  width: 280px;
  background: transparent;

  padding: 12px 0;
`;

export const Header = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    color: var(--darkGray);
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

    &:hover,
    &.active {
      color: ${shade(0.08, '#fff')};
    }
  }

  > span {
    font-size: 13px;
    color: #7ed5e9;
    text-transform: uppercase;
    font-weight: 500;

    &:hover,
    &.active {
      color: ${shade(0.08, '#7ed5e9')};
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 12px;
  padding: 0 12px;
`;
