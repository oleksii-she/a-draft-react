import { React, useState } from 'react';
import { Registration } from './Registration/Registration';
import { Conteiner } from './conteiner.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  return (
    <Conteiner>
      <Registration />
    </Conteiner>
  );
};
