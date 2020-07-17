import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import ChatListMenu from '../../components/ChatListMenu';
import SideMenu from '../../components/SideMenu';
import Chat from '../../components/Chat';
import Inbox from '../../components/Inbox';
import EmailChat from '../../components/EmailChat';
import CustomerInfo from '../../components/CustomerInfo';
import api from '../../services/api';

import { Container, Content } from './styles';

export interface ICustomer {
  id: number;
  name: string;
  photo: string;
  company: string;
  lastConversations: Array<{
    channel: number;
    finishedAt: number;
  }>;
  observations: string;
  contacts: Array<{
    channel: number;
    value: string;
  }>;
}

export interface IUser {
  name: string;
  user: string;
  password: string;
  company: string;
  photo: string;
}

export interface IChat {
  id: number;
  customer: number;
  channel: number;
  subject?: string;
  start: number;
  formattedStart: string;
  messages: Array<{
    seen: boolean;
    timestamp: number;
    formattedDate: string;
    body: string;
    type: string;
  }>;
}

export interface IContactType {
  channel: number;
  type: 'whatsapp' | 'email' | 'telefone' | 'skype' | 'webchat';
}

export interface ISelectedChannel {
  channel: number;
  type: 'whatsapp' | 'email' | 'telefone' | 'skype' | 'webchat';
}

const Dashboard: React.FC = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [contactTypeList, setContactTypeList] = useState<IContactType[]>([]);
  const [chats, setChats] = useState<IChat[]>([]);
  const [isEmailOpened, setIsEmailOpened] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>(
    {} as ICustomer,
  );
  const [selectedChannel, setSelectedChannel] = useState<ISelectedChannel>({
    channel: 1,
    type: 'whatsapp',
  });
  const [email, setEmail] = useState<IChat[]>([]);

  useEffect(() => {
    api.get('customers').then(({ data }) => {
      setCustomers(data);
      setSelectedCustomer(data[0]);
    });
  }, []);

  useEffect(() => {
    api.get('user').then(({ data }) => setUser(data));
  }, []);

  useEffect(() => {
    api.get('contacts').then(({ data }) => setContactTypeList(data));
  }, []);

  useEffect(() => {
    api.get('chats').then(({ data }) =>
      setChats(
        data.map((chat: IChat) => ({
          ...chat,
          formattedStart: new Intl.DateTimeFormat('pt-BR').format(chat.start),
          messages: chat.messages.map(message => ({
            ...message,
            formattedDate: format(
              new Date(message.timestamp),
              "dd'/'MM'/'yyyy H'h'mm",
              {
                locale: ptBR,
              },
            ),
          })),
        })),
      ),
    );
  }, []);

  const handleChangeChannel = useCallback(
    channel => {
      if (
        selectedChannel.type === channel.type ||
        (channel.type !== 'whatsapp' && channel.type !== 'email')
      )
        return;

      setSelectedChannel(channel);
    },
    [selectedChannel],
  );

  const userChannelChats = useMemo(
    () =>
      chats.filter(
        chat =>
          chat.customer === selectedCustomer.id &&
          chat.channel === selectedChannel.channel,
      ),
    [chats, selectedChannel, selectedCustomer],
  );

  const handleCloseEmail = useCallback(() => {
    setIsEmailOpened(false);
    setEmail([]);
  }, []);

  const handleOpenEmail = useCallback(
    chatId => {
      setEmail(userChannelChats.filter(chat => chat.id === chatId));
      setIsEmailOpened(true);
    },
    [userChannelChats],
  );

  return selectedCustomer?.name ? (
    <Container>
      <ChatListMenu
        selectedCustomer={selectedCustomer}
        customers={customers}
        user={user}
        chats={chats}
      />
      <Content>
        <SideMenu
          contacts={contactTypeList}
          chats={chats}
          selectedCustomer={selectedCustomer}
          selectedChannel={selectedChannel}
          handleChangeChannel={handleChangeChannel}
        />

        {selectedChannel.type === 'whatsapp' && (
          <Chat
            customer={selectedCustomer}
            user={user}
            chats={userChannelChats}
          />
        )}

        {selectedChannel.type === 'email' &&
          (!isEmailOpened ? (
            <Inbox chats={userChannelChats} handleOpenEmail={handleOpenEmail} />
          ) : (
            <EmailChat
              customer={selectedCustomer}
              user={user}
              email={email}
              handleCloseEmail={handleCloseEmail}
            />
          ))}

        <CustomerInfo
          customer={selectedCustomer}
          contactTypeList={contactTypeList}
        />
      </Content>
    </Container>
  ) : (
    <Container>Carregando...</Container>
  );
};

export default Dashboard;
