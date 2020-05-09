import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="seila">
        <img
          src="https://avatars1.githubusercontent.com/u/34035319?s=460&u=3b05f1819b007d044b2ec0faf33fd597e16178e0&v=4"
          alt="Lucas Nogueira"
        />
        <div>
          <strong>lsnogueira/fastfeet-backend</strong>
          <p>
            Aplicação para uma transportadora fictícia desenvolvido com NodeJS
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
