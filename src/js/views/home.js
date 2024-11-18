import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
        actions.getVehicles();
        actions.getPlanets();
    }, []);

    return (
        <div className="container my-4">
            {/* Personajes */}
            <h1 className="text-center mb-4">Characters</h1>
            <div className="row">
                {store.characters.map(character => (
                    <div className="col-md-4 mb-4" key={character.uid}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                                className="card-img-top"
                                alt={character.name}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{character.name}</h5>
                                <div className="d-flex justify-content-center mt-3">
                                    {/* link learn more (duplicar para vehicule y planets) */}
                                    <Link to={`/characters/${character.uid}`} className="btn btn-primary me-2"> 
                                        Learn more!
                                    </Link>
                                    <button
                                        className="btn btn-outline-warning"
                                        onClick={() => actions.toggleFavorite(character)}
                                    >
                                        ❤️
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Vehículos */}
            <h1 className="text-center my-4">Vehicles</h1>
            <div className="row">
                {store.vehicles.map(vehicle => (
                    <div className="col-md-4 mb-4" key={vehicle.uid}>
                        <div className="card h-100 shadow-sm">
                        <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                                className="card-img-top"
                                alt={vehicle.name}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />

                            <div className="card-body text-center">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <div className="d-flex justify-content-center mt-3">
                                    {/* link learn more) */}
                                    <Link to={`/vehicle/${vehicle.uid}`} className="btn btn-primary me-2">
                                        Learn more!
                                    </Link>
                                    <button
                                        className="btn btn-outline-warning"
                                        onClick={() => actions.toggleFavorite(vehicle)}
                                    >
                                        ❤️
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Planetas */}
            <h1 className="text-center my-4">Planets</h1>
            <div className="row">
                {store.planets.map(planet => (
                    <div className="col-md-4 mb-4" key={planet.uid}>
                        <div className="card h-100 shadow-sm">

                        <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                className="card-img-top"
                                alt={planet.name}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />


                            <div className="card-body text-center">
                                <h5 className="card-title">{planet.name}</h5>
                                <div className="d-flex justify-content-center mt-3">
                                    {/* link learn more ) */}
                                    <Link to={`/planet/${planet.uid}`} className="btn btn-primary me-2">
                                        Learn more!
                                    </Link>
                                    <button
                                        className="btn btn-outline-warning"
                                        onClick={() => actions.toggleFavorite(planet)}
                                    >
                                        ❤️
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};




