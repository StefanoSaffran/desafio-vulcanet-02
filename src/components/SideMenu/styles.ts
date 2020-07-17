import styled from 'styled-components';
import { ISelectedChannel } from '../../pages/Dashboard';

interface IIconWrapperProps {
  notifications: number;
  selectedChannel: ISelectedChannel;
}

export const Container = styled.div`
  background-color: #f8fafc;
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

  background-color: #f8fafc;

  position: relative;

  &.active {
    background-color: ${props =>
      props.selectedChannel.type === 'whatsapp' ? '#25D366' : '#E33E1A'};
      svg path {
        color: #fff;
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
  min-width: 8px;
  padding: 1px 4px;

  position: absolute;
  bottom: 5px;
  right: 5px;

  text-align: center;
  font-size: 10px;
  font-weight: bold;
  }
`;

export const Calendar = styled.button`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f8fafc;
`;
