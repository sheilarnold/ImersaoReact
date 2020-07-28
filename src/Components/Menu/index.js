import React from 'react';
import './Menu.css';
import img from '../../Assets/img/logo.png';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

function Menu() {
    return (
            <nav className="menu">
                <a href="/home">
                    <img className="logo" src={img} alt="Logo AluraFlix"/>
                </a>
                {/*<ButtonLink className="buttonLink" href="/">
                    Novo Vídeo
    </ButtonLink>*/}
                <Button as="a" className="buttonLink" href="/">
                                Novo Vídeo
                </Button>
            </nav>
        );
}

export default Menu;