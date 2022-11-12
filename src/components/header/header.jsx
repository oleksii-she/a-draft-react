import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { Conteiner } from 'components/conteiner.styled';
import { HeaderStyled, NavigationMenu, Section } from './header.styled';
export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <NavigationMenu>
          <NavLink to="/" end>
            HOME
          </NavLink>
        </NavigationMenu>
      </HeaderStyled>
      <Conteiner>
        <Suspense fallback={<BeatLoader color="#36d7b7" />}>
          <Outlet />
        </Suspense>
      </Conteiner>
      <section>
        <h2>dfsdfsdfsdfswdf</h2>
      </section>
    </>
  );
};
