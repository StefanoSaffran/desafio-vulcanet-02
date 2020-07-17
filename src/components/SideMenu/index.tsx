import React, { FC, useMemo } from 'react';
import { AiOutlineSkype, AiOutlineMessage } from 'react-icons/ai';
import { GoMail, GoCalendar } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import {
  IContactType,
  ISelectedChannel,
  IChat,
  ICustomer,
} from '../../pages/Dashboard';

import { Container, IconWrapper, Calendar } from './styles';

interface IProps {
  contacts: IContactType[];
  chats: IChat[];
  selectedCustomer: ICustomer;
  selectedChannel: ISelectedChannel;
  handleChangeChannel(channel: ISelectedChannel): void;
}

const icons = {
  calendar: <GoCalendar size={24} color="#00A7CF" />,
  whatsapp: <FaWhatsapp size={24} color="#25D366" />,
  email: <GoMail size={24} color="#E33E1A" />,
  telefone: <FiPhoneCall size={24} color="#6A4AEA" />,
  skype: <AiOutlineSkype size={24} color="#00AFF0" />,
  webchat: <AiOutlineMessage size={24} color="#E87C28" />,
};

const SideMenu: FC<IProps> = ({
  contacts,
  chats,
  selectedChannel,
  selectedCustomer,
  handleChangeChannel,
}) => {
  const notifications = useMemo(() => {
    const temp = contacts.map(contact => ({
      ...contact,
      count: 0,
    }));

    const customerChats = chats.filter(
      chat => chat.customer === selectedCustomer.id,
    );

    customerChats.forEach((nextChat, index) => {
      const hasNew = nextChat.messages.some(chat => chat.seen !== true);

      if (hasNew && temp.length) {
        temp[customerChats[index].channel].count += 1;
      }
    });

    return temp;
  }, [chats, selectedCustomer, contacts]);

  return (
    <Container>
      <Calendar>{icons.calendar}</Calendar>
      {contacts?.map(contact => (
        <IconWrapper
          key={contact.channel}
          selectedChannel={selectedChannel}
          className={selectedChannel.type === contact.type ? 'active' : ''}
          notifications={notifications[contact.channel]?.count}
          onClick={() => handleChangeChannel(contact)}
        >
          {icons[contact.type || 'webchat']}
        </IconWrapper>
      ))}
    </Container>
  );
};

export default SideMenu;
