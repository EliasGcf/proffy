import React from 'react';
import { Link } from 'react-router-dom';

import { BackIcon } from '../../assets/images/icons';
import { ProffyLogo } from '../../assets/images';

import { Container } from './styles';

interface HeaderProps {
  title: string;
  backTo: string;
}

const Header: React.FC<HeaderProps> = ({ title, backTo }) => {
  return (
    <Container>
      <div>
        <Link to={backTo}>
          <BackIcon />
        </Link>

        <span>{title}</span>

        <ProffyLogo />
      </div>
    </Container>
  );
};

export default Header;
