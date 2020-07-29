import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src="https://fontmeme.com/permalink/200729/3e93350a5cf1ae5ddb0bbf9e599bd20e.png" alt="netflix-font" border="0" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;