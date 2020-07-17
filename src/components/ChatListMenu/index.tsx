import React, { FC } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import ChatList from './ChatList';
import Search from '../Search';
import { ICustomer, IUser, IChat } from '../../pages/Dashboard';

import {
  Container,
  Header,
  Profile,
  Avatar,
  UserData,
  InputWrapper,
} from './styles';

interface IProps {
  customers: ICustomer[];
  selectedCustomer: ICustomer;
  user: IUser;
  chats: IChat[];
  handleChangeCustomer(customerId: number): void;
}

const ChatListMenu: FC<IProps> = ({
  customers,
  selectedCustomer,
  user,
  chats,
  handleChangeCustomer,
}) => {
  return (
    <Container>
      <Header to="/">
        <Profile>
          <Avatar src={user.photo} alt={user.name} />
          <UserData>
            <strong>{user.name}</strong>
            <span>{user.company}</span>
          </UserData>
        </Profile>

        <FaCaretDown size={12} />
      </Header>

      <InputWrapper>
        <Search has_background />
      </InputWrapper>

      <ChatList
        handleChangeCustomer={handleChangeCustomer}
        selectedCustomer={selectedCustomer}
        customers={customers}
        chats={chats}
      />
    </Container>
  );
};

export default ChatListMenu;
