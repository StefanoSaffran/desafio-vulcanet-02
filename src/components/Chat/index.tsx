import React, { FC } from 'react';
import { FaCheckDouble, FaCheck } from 'react-icons/fa';

import { AiOutlinePicture } from 'react-icons/ai';
import { FaRegCopy, FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import Search from '../Search';
import { ICustomer, IUser, IChat } from '../../pages/Dashboard';

import {
  Container,
  Header,
  ChatBody,
  InfoMessage,
  Messages,
  Author,
  Avatar,
  Message,
  InputWrapper,
  MessagesInput,
  IconsWrapper,
} from './styles';

export interface IMessageProps {
  from_guest: boolean;
  seen: boolean;
  author: string;
  date: string;
  avatar: string;
}

interface IProps {
  customer: ICustomer;
  user: IUser;
  chats: IChat[];
}

const MessageRow: FC<IMessageProps> = ({
  children,
  from_guest,
  seen,
  author,
  date,
  avatar,
}) => {
  return (
    <>
      <Author from_guest={from_guest} seen={seen}>
        <Avatar src={avatar} alt={author} />
        <p>
          <strong>{author}</strong> - {date}
        </p>
        {seen ? <FaCheckDouble size={16} /> : <FaCheck size={16} />}
      </Author>

      <Message from_guest={from_guest}>{children}</Message>
    </>
  );
};

const Chat: FC<IProps> = ({ customer, user, chats }) => {
  console.log(chats);
  return (
    <Container>
      <Header>
        <Search />

        <button type="button">Finalizar atendimento</button>
      </Header>

      <ChatBody>
        {chats[0] && (
          <InfoMessage>
            <span>
              Atendimento iniciado em{' '}
              <strong>{chats[0]?.formattedStart}</strong>
            </span>
          </InfoMessage>
        )}

        <Messages>
          {chats[0]?.messages.map(message => (
            <MessageRow
              key={message.timestamp}
              date={message.formattedDate}
              from_guest={message.type === 'incoming'}
              seen={message.seen}
              author={message.type === 'incoming' ? customer.name : user.name}
              avatar={message.type === 'incoming' ? customer.photo : user.photo}
            >
              {message.body}
            </MessageRow>
          ))}
        </Messages>

        <InputWrapper>
          <MessagesInput type="text" placeholder="Digite sua mensagem..." />

          <IconsWrapper>
            <AiOutlinePicture size={16} />
            <FaRegCopy size={16} />
            <FaMicrophone size={16} />
            <FaPaperPlane size={16} />
          </IconsWrapper>
        </InputWrapper>
      </ChatBody>
    </Container>
  );
};

export default Chat;
