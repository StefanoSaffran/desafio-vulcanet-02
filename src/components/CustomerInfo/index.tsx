import React, { FC, useMemo } from 'react';
import { FaPencilAlt, FaWhatsapp, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineSkype, AiOutlineMessage } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { differenceInDays } from 'date-fns';

import { ICustomer, IContactType } from '../../pages/Dashboard';

import {
  Container,
  Customer,
  Avatar,
  CustomerData,
  ActionButtonsWrapper,
  LatestChats,
  ChatInfo,
  Notes,
  ContactInfo,
  Contact,
  ContactData,
} from './styles';

const icons = {
  whatsapp: <FaWhatsapp size={24} />,
  email: <GoMail size={24} />,
  skype: <AiOutlineSkype size={24} />,
  telefone: <FiPhoneCall size={24} />,
  webchat: <AiOutlineMessage size={24} />,
};

interface ICustomerRowProps {
  type: 'whatsapp' | 'skype' | 'email' | 'telefone' | 'webchat';
  details: string;
}

interface IProps {
  customer: ICustomer;
  contactTypeList: IContactType[];
}

const ContactRow: FC<ICustomerRowProps> = ({ type, details }) => {
  return (
    <Contact>
      {icons[type]}
      <ContactData>
        <strong>{type}</strong>
        <span>{details}</span>
      </ContactData>
    </Contact>
  );
};

const CustomerInfo: FC<IProps> = ({ customer, contactTypeList }) => {
  const lastConversations = useMemo(() => {
    let index = 0;
    return customer.lastConversations.map(chat => {
      const getChannel = contactTypeList.find(
        contact => contact.channel === chat.channel,
      );
      const formattedDate = new Intl.DateTimeFormat('pt-BR').format(
        chat.finishedAt,
      );
      const diffDays = differenceInDays(Date.now(), new Date(chat.finishedAt));
      index += 1;

      return {
        index,
        channel: getChannel?.type || 'email',
        formattedDate,
        diffDays,
      };
    });
  }, [customer, contactTypeList]);

  const contactInfo = useMemo(() => {
    return customer.contacts.map(info => {
      const getChannel = contactTypeList.find(
        contact => contact.channel === info.channel,
      );

      return {
        channel: getChannel?.type || 'email',
        value: info.value,
      };
    });
  }, [customer, contactTypeList]);

  return (
    <Container>
      <Customer>
        <Avatar />
        <CustomerData>
          <strong>{customer.name}</strong>
          <span>{customer.company}</span>
        </CustomerData>
      </Customer>

      <ActionButtonsWrapper>
        <button type="button">
          <FaPencilAlt size={15} color="#00A7CF" />
        </button>
        <button type="button">
          <FaTrashAlt size={15} color="#E33E1A" />
        </button>
      </ActionButtonsWrapper>

      <LatestChats>
        <h5>Últimas conversas</h5>

        {lastConversations.map(
          ({ channel, diffDays, formattedDate, index }) => (
            <ChatInfo key={index}>
              {icons[channel]}
              <span>
                {formattedDate} ({diffDays} dias atrás)
              </span>
            </ChatInfo>
          ),
        )}
      </LatestChats>

      <Notes>
        <h5>Observações</h5>

        <span>{customer.observations}</span>
      </Notes>

      <ContactInfo>
        {contactInfo.map(({ channel, value }) => (
          <ContactRow key={value} type={channel} details={value} />
        ))}
      </ContactInfo>
    </Container>
  );
};

export default CustomerInfo;
