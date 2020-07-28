import React from 'react';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src="https://fontmeme.com/permalink/200728/7d3fa33b772dcc1073e83c7865ea9f23.png" alt="netflix-font" border="0" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;