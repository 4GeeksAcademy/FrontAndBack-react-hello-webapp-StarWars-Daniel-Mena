const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listCharacter: [],
			listPlanet: [],
			listVehicle: [],
			listDetails: [],
			listDescription: [],
			favourite: [],
			numFavoutire: 0
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacter: () => {
				fetch(`https://www.swapi.tech/api/people/`)
					.then(response => response.json())
					.then(data => setStore({ listCharacter: data.results }))
					.catch(error => {
						console.log(error);
					});
			},

			getPlanet: () => {
				fetch(`https://www.swapi.tech/api/planets/`)
					.then(response => response.json())
					.then(data => setStore({ listPlanet: data.results }))
					.catch(error => {
						console.log(error);
					});
			},

			getVehicle: () => {
				fetch(`https://www.swapi.tech/api/vehicles/`)
					.then(response => response.json())
					.then(data => setStore({ listVehicle: data.results }))
					.catch(error => {
						console.log(error);
					});
			},

			getDetail: (url) =>{
				fetch(url)
					.then(response => response.json())
					.then(data => setStore({ listDetails: data.result.properties, listDescription: data.result.description }))
					.catch(error => {
						console.log(error);
					});
			},

			addFavourite: (item, url)=>{
				const itemFav = getStore().favourite.map(nombre => nombre.name)
				if (!itemFav.includes(item)){
					setStore({favourite: getStore().favourite.concat({name: item, url: url})})
					setStore({numFavoutire: getStore().favourite.length})
				}
				console.log(getStore().favourite);
			},

			deleteFavourite: (i)=>{
				setStore({favourite: getStore().favourite.filter((item) => item != i)});
				setStore({numFavoutire: getStore().favourite.length})
			}

		}
	};
};

export default getState;
