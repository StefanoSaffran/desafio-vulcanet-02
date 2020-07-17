import React, { FC } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import ChatList from './ChatList';
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
}

const ChatListMenu: FC<IProps> = ({
  customers,
  selectedCustomer,
  user,
  chats,
}) => {
  return (
    <Container>
      <Header>
        <Profile>
          <Avatar src={user.photo} alt={user.name} />
          <UserData>
            <strong>{user.name}</strong>
            <span>{user.company}</span>
          </UserData>
        </Profile>

        <MdExpandMore size={12} />
      </Header>

      <InputWrapper>
        <input type="text" />
        <FaSearch />
      </InputWrapper>

      <ChatList
        selectedCustomer={selectedCustomer}
        customers={customers}
        chats={chats}
      />
    </Container>
  );
};

export default ChatListMenu;
