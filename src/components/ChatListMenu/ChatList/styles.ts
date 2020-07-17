import styled from 'styled-components';

interface ICustomerProps {
  notifications: number;
}

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 16px 0;
  padding: 0 12px;
  color: var(--white);

  > span {
    font-size: 13px;
  }

  > svg {
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const Customer = styled.button<ICustomerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 12px;

  position: relative;
  background: none;

  &:hover,
  &.active {
    background-color: var(--selected);
    cursor: pointer;
  }

  &::after {
  content: '${({ notifications }) => notifications || ''}';

  display: ${props => (props.notifications ? 'inline' : 'none')};

  background-color: var(--notification);
  color: var(--white);

  border-radius: 50%;

  box-shadow: 0 0 5px 1px var(--white);

  width: auto;
  height: ${props => (props.notifications > 99 ? 18 : 16)}px;
  min-width: 12px;
  padding: ${props => (props.notifications > 99 ? 6 : 4)}px 4px 0;

  position: absolute;
  top: calc(50% - 10px);
  right: 18px;

  text-align: center;
  font-size: 10px;
  font-weight: bold;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: var(--quinary);
`;

export const CustomerData = styled.div`
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
    color: #7ed5e9;
    text-transform: uppercase;
    font-weight: 500;
  }
`;
