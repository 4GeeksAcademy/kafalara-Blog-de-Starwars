import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Character = () => {
    const { uid } = useParams();
    const { actions } = useContext(Context);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        actions.getCharacterDetail(uid).then(data => setDetails(data));
    }, [uid]);
    console.log(details);
    

    return (
        <div className="container my-4">
            <Link to="/" className="btn btn-secondary mb-4">Back to Home</Link>
            {details ? (
                <div className="card mx-auto" style={{ maxWidth: '600px' }}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                        className="card-img-top"
                        alt={details.name}
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                        <h2 className="card-title text-center">{details.name}</h2>
                        {/* Bootstrap lista de detalles */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Name:</strong> {details.name || 'n/a'}</li>
                            <li className="list-group-item"><strong>Birth Year:</strong> {details.birth_year || 'n/a'}</li>
                            <li className="list-group-item"><strong>Gender:</strong> {details.gender || 'n/a'}</li>
                            <li className="list-group-item"><strong>Height:</strong> {details.height || 'n/a'}</li>
                            <li className="list-group-item"><strong>Sking Color:</strong> {details.skin_color || 'n/a'}</li>
                            <li className="list-group-item"><strong>Eye Color:</strong> {details.eye_color || 'n/a'}</li>


                        </ul>
                    </div>
                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>
    );
};
