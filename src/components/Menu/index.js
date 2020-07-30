import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src="https://fontmeme.com/permalink/200730/0f73615c1efddd47ba7766494156224f.png" alt="netflix-font" border="0" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;