import React from "react";

// Routing
import { Link } from 'react-router-dom';

// Images
import EntourageLogo from '../../images/logo-entourage.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, TMDBLogoImg, EntourageLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <EntourageLogoImg src={EntourageLogo} alt='entourage-logo' />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
);

export default Header;