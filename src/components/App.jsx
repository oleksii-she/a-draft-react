import { React, useState } from 'react';
import { Registration } from './Registration/Registration';
import { Conteiner } from './conteiner.styled';
export const App = () => {
  return (
    <Conteiner>
      <Registration />
    </Conteiner>
  );
};
