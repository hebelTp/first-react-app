import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Button/Icon';
import Search from '../Search/Search';

const Header = () => {
  return (
    <header className={style.component}>
      <Container>
        <div className={style.wrapper}>
          <Link className={style.logo} to="/">
            <Icon name="cat" />
          </Link>
          <Search />
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink exact to="/info" activeClassName="active">
              Info
            </NavLink>
            <NavLink exact to="/faq" activeClassName="active">
              FAQ
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
