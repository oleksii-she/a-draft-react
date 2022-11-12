import { React, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './header/header';
// import { Registration } from './Registration/Registration';
// import { Conteiner } from './conteiner.styled';

const Home = lazy(() => import('../page/Home'));
const NotFound = lazy(() => import('../page/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
