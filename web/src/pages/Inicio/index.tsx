import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                </header>

                <main>
                    <h1>Pokontrol</h1>
                    <p>Gerir sua coleção de Pokémon ficou <b>mais fácil</b>!</p>

                    <Link to="/nlw">
                        <strong>Entrar</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Inicio;