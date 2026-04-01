import React from 'react';

interface CardData {
    tipo: string;
    titulo: string;
    texto: string;
    enlace: string;
    imagen: string;
}

const Card = ({ card }: { card: CardData }) => {

    const { tipo, titulo, texto, enlace, imagen } = card;

    return (
        <div data-cat={tipo} className={`portfolio ${tipo} mix_all`}>
            <div className="portfolio-wrapper">
                <div
                    className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    style={{ width: '18rem' }}
                >
                    {/* El 'tipo' arma la ruta de la imagen */}
                    <img
                        className="img-responsive w-full h-48 object-contain p-4"
                        alt={`Logo de ${titulo}`}
                        src={`../public/imagen/back/${imagen}`}
                    />

                    <div className="card-body p-5 border-t">
                        <h5 className="card-title text-lg font-bold mb-2">
                            {titulo}
                        </h5>

                        <p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">
                            {texto}
                        </p>

                        <a
                            href={enlace}
                            className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Studies ... 👨‍🎓 ...
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
