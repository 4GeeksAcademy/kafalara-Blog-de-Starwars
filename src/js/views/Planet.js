import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Planet = () => {
    const { uid } = useParams();
    const { actions } = useContext(Context);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        actions.getPlanetDetail(uid).then(data => setDetails(data));
    }, [uid]);
    console.log(details);

    return (
        <div className="container my-4">
            <Link to="/" className="btn btn-secondary mb-4">Back to Home</Link>
            {details ? (
                <div className="card mx-auto" style={{ maxWidth: '600px' }}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                        className="card-img-top"
                        alt={details.name}
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                        <h2 className="card-title text-center">{details.name}</h2>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Name:</strong> {details.name || 'n/a'}</li>
                            <li className="list-group-item"><strong>Climate:</strong> {details.climate || 'n/a'}</li>
                            <li className="list-group-item"><strong>Population:</strong> {details.population || 'n/a'}</li>
                            <li className="list-group-item"><strong>Orbital Period:</strong> {details.orbital_period || 'n/a'}</li>
                            <li className="list-group-item"><strong>Rotation Period:</strong> {details.rotation_period || 'n/a'}</li>
                            <li className="list-group-item"><strong>Diameter:</strong> {details.diameter || 'n/a'}</li>
                            <li className="list-group-item"><strong>Terrain:</strong> {details.terrain || 'n/a'}</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>
    );
};

