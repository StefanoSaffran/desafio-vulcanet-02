import React, { FC } from 'react';
import { FaCheckDouble, FaCheck, FaArrowLeft, FaRegCopy } from 'react-icons/fa';

import { AiOutlinePicture } from 'react-icons/ai';
import {
  Container,
  Header,
  Body,
  Messages,
  Author,
  Avatar,
  Message,
  TextAreaWrapper,
  TextArea,
  IconsWrapper,
} from './styles';
import { IChat, ICustomer, IUser } from '../../pages/Dashboard';

interface IMessageProps {
  from_guest: boolean;
  seen: boolean;
  author: string;
  date: string;
  avatar: string;
}

interface IProps {
  handleCloseEmail(): void;
  email: IChat[];
  customer: ICustomer;
  user: IUser;
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

const EmailChat: FC<IProps> = ({ handleCloseEmail, email, customer, user }) => {
  return (
    <Container>
      <Header>
        <div>
          <button type="button" onClick={handleCloseEmail}>
            <FaArrowLeft size={16} />
          </button>

          <h3>{email[0].subject}</h3>
        </div>

        <button type="button">Finalizar atendimento</button>
      </Header>

      <Body>
        <Messages>
          {email[0].messages.map(message => (
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

        <TextAreaWrapper>
          <TextArea
            rows={4}
            draggable={false}
            placeholder="Digite sua mensagem..."
          />

          <div>
            <button type="button">Responder</button>
            <IconsWrapper>
              <AiOutlinePicture size={16} />
              <FaRegCopy size={16} />
            </IconsWrapper>
          </div>
        </TextAreaWrapper>
      </Body>
    </Container>
  );
};

export default EmailChat;
