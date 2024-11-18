const getState = ({ getStore, setStore }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            favorites: []
        },
        actions: {
            // Fetch de personajes
            getCharacters: () => {
                fetch("https://www.swapi.tech/api/people")
                    .then(response => response.json())
                    .then(data => {
                        setStore({ characters: data.results });
                    })
                    .catch(error => console.error("Error al recuperar personajes:", error));
            },

            // Fetch de vehículos
            getVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles")
                    .then(response => response.json())
                    .then(data => {
                        setStore({ vehicles: data.results });
                    })
                    .catch(error => console.error("Error al recuperar vehiculos:", error));
            },

            // Fetch de planetas
            getPlanets: () => {
                fetch("https://www.swapi.tech/api/planets")
                    .then(response => response.json())
                    .then(data => {
                        setStore({ planets: data.results });
                    })
                    .catch(error => console.error("Error al recuperar plantetas:", error));
            },

            // Fetch de detalles de personaje
            getCharacterDetail: (id) => {
                return fetch(`https://www.swapi.tech/api/people/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        return data.result.properties;
                    })
                    .catch(error => console.error("Error detalles personajes:", error));
            },

            // Fetch de detalles de planeta
            getPlanetDetail: (id) => {
                return fetch(`https://www.swapi.tech/api/planets/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        return data.result.properties;
                    })
                    .catch(error => console.error("Error fetching planet details:", error));
            },
            
            // Fetch de detalles de vehicle
            getVehicleDetail: (id) => {
                return fetch(`https://www.swapi.tech/api/vehicles/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        return data.result.properties;
                    })
                    .catch(error => console.error("Error fetching vehicle details:", error));
            },
            

            // Funcionalidad de favoritos
            toggleFavorite: (item) => {
                const store = getStore();
                console.log(item);
                
                const isFavorite = store.favorites.some(fav => fav.uid === item.uid && fav.name == item.name);
                if (isFavorite) {
                    const newfavorite= store.favorites.filter(fav => fav.uid == item.uid && fav.name !== item.name)
                    setStore({ favorites: newfavorite});
                    console.log(newfavorite);
                } else {
                    setStore({ favorites: [...store.favorites, item] });
                }
            }
        }
    };
};

export default getState;
