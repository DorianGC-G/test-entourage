import React from "react";

import EntourageLogo from '../../images/logo-entourage.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, TMDBLogoImg, EntourageLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <EntourageLogoImg src={EntourageLogo} alt='entourage-logo' />
      <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
);

export default Header;