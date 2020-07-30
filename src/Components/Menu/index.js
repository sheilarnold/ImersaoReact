import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/img/logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="buttonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;