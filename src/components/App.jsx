import { React, useState } from 'react';
import { Registration } from './Registration/Registration';
import { Conteiner } from './conteiner.styled';
export const App = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Conteiner>
      <Registration login={login} password={password} />
    </Conteiner>
  );
};
