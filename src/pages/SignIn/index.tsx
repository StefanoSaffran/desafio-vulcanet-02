import React, { useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { FaArrowRight, FaWhatsapp, FaUserAlt, FaLock } from 'react-icons/fa';
import { AiOutlineSkype, AiOutlineMessage } from 'react-icons/ai';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';

import {
  Container,
  Content,
  AnimationContainer,
  Icons,
  Background,
} from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();

  const handleSignIn = useCallback(
    event => {
      event.preventDefault();
      history.push('/dashboard');
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="PeçaZap" />

          <form>
            <Icons>
              <FaWhatsapp size={32} />
              <AiOutlineSkype size={32} />
              <GoMail size={32} />
              <FiPhoneCall size={32} />
              <AiOutlineMessage size={32} />
            </Icons>
            <Input name="user" icon={FaUserAlt} placeholder="Usuário" />
            <Input
              name="password"
              icon={FaLock}
              type="password"
              placeholder="Senha"
            />

            <button type="submit" onClick={handleSignIn}>
              Entrar
              <FaArrowRight size={15} />
            </button>
            <Link to="/">Esqueceu a senha?</Link>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
