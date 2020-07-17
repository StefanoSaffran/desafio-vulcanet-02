/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Header, EmailList, Email } from './styles';
import Search from '../Search';
import { IChat } from '../../pages/Dashboard';

interface IProps {
  handleOpenEmail(chatId: number): void;
  chats: IChat[];
}

const Inbox: FC<IProps> = ({ handleOpenEmail, chats }) => {
  return (
    <Container>
      <Header>
        <h3>Caixa de Entrada</h3>

        <div>
          <Search />

          <button type="button">Novo Email</button>
        </div>
      </Header>

      <EmailList>
        <li>
          <span>Assunto</span>
          <span>Início</span>
          <span>Última mensagem</span>
        </li>
        {chats.map(chat => {
          const formattedLastMessage = new Intl.DateTimeFormat('pt-BR').format(
            chat.messages[chat.messages.length - 1].timestamp,
          );

          const notifications = chat.messages.reduce((sum, nextChat) => {
            const hasNew = nextChat.seen !== true;

            return hasNew ? sum + 1 : sum;
          }, 0);
          return (
            <li>
              <Email
                type="button"
                notifications={notifications}
                onClick={() => handleOpenEmail(chat.id)}
              >
                <span>{chat.subject}</span>
                <span>{chat.formattedStart}</span>
                <span>{formattedLastMessage}</span>
                <div>
                  <span>
                    <FaArrowRight size={16} />
                  </span>
                </div>
              </Email>
            </li>
          );
        })}
      </EmailList>
    </Container>
  );
};

export default Inbox;
