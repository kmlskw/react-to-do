import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Search from '../Search/SearchContainer';

export class Header extends Component {
  render() {
    return (
      <div className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
              <Icon name={settings.header.icon} />
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
      </div>
    );
  }
}

export default Header;
