import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img 
                        src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" // imagen star
                        alt="Star Wars" 
                        style={{ width: '100px' }} 
                    />
                </Link>
                
                {/* Botón Fav */}
                <div className="ml-auto">
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {store.favorites.length > 0 ? (
                                store.favorites.map((favorite, index) => (
                                    <li key={index} className="d-flex align-items-center justify-content-between px-3">
                                        <span>{favorite.name}</span>
                                        <button
                                            className="btn btn-sm btn-danger ms-2"
                                            onClick={() => actions.toggleFavorite(favorite)}
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li className="dropdown-item text-center">No favorites added</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};