import React, { FC, useMemo } from 'react';
import { MdAdd } from 'react-icons/md';
import { ICustomer, IChat } from '../../../pages/Dashboard';

import { Container, Header, Customer, Avatar, CustomerData } from './styles';

interface IProps {
  handleChangeCustomer(customerId: number): void;
  customers: ICustomer[];
  selectedCustomer: ICustomer;
  chats: IChat[];
}

interface ICustomerProps {
  handleChangeCustomer(customerId: number): void;
  id: number;
  name: string;
  company: string;
  photo: string;
  active?: boolean;
  chats: IChat[];
}

const CustomerRow: FC<ICustomerProps> = ({
  id,
  name,
  company,
  photo,
  active,
  chats,
  handleChangeCustomer,
}) => {
  const notifications = useMemo(() => {
    const customerChats = chats.filter(chat => chat.customer === id);

    return customerChats.reduce((sum, nextChat) => {
      const hasNew = nextChat.messages.some(chat => chat.seen !== true);

      return hasNew ? sum + 1 : sum;
    }, 0);
  }, [chats, id]);

  return (
    <Customer
      onClick={() => handleChangeCustomer(id)}
      notifications={notifications}
      className={active ? 'active' : ''}
    >
      <Avatar src={photo} alt={name} />
      <CustomerData>
        <strong>{name}</strong>
        <span>{company}</span>
      </CustomerData>
    </Customer>
  );
};

const ChatList: FC<IProps> = ({
  customers,
  selectedCustomer,
  chats,
  handleChangeCustomer,
}) => {
  return (
    <Container>
      <Header>
        <span>Clientes</span>
        <MdAdd size={18} />
      </Header>

      {customers?.map(({ id, name, company, photo }) => (
        <CustomerRow
          key={id}
          active={selectedCustomer.name === name}
          handleChangeCustomer={handleChangeCustomer}
          id={id}
          name={name}
          photo={photo}
          company={company}
          chats={chats}
        />
      ))}
    </Container>
  );
};

export default ChatList;
