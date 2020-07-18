import styled from 'styled-components';
import { ISelectedChannel } from '../../pages/Dashboard';

interface IIconWrapperProps {
  notifications: number;
  selectedChannel: ISelectedChannel;
}

export const Container = styled.div`
  background-color: var(--sidemenuBackground);
  width: 64px;
  height: 100%;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.2);
  z-index: 2;

  flex-shrink: 0;
`;

export const IconWrapper = styled.button<IIconWrapperProps>`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--sidemenuBackground);

  position: relative;
  transition: background-color color ease-in-out 0.2s;

  &.active {
    background-color: ${props =>
      props.selectedChannel.type === 'whatsapp'
        ? 'var(--whatsapp)'
        : 'var(--email)'};
      svg path {
        color: var(--white);
      }

      ::after {
        background-color: ${props =>
          props.selectedChannel.type === 'email' && 'var(--white)'};
        color: ${props =>
          props.selectedChannel.type === 'email' && 'var(--email)'};
      }
  }

  &::after {
  content: '${props => props.notifications || ''}';

  display: ${props => (props.notifications ? 'inline' : 'none')};

  background-color: var(--notification);
  color: var(--white);

  border-radius: 12px;

  box-shadow: 0 0 5px 1px var(--white);

  width: auto;
  height: 15px;
  min-width: 11px;
  padding: 1px 3px 0;

  position: absolute;
  bottom: 5px;
  right: 5px;

  text-align: center;
  font-size: 10px;
  font-weight: bold;
    .active {
      background-color: ${props =>
        props.selectedChannel.type === 'email' && 'var(--white)'};
    }
  }
`;

export const Calendar = styled.button`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--sidemenuBackground);
`;
