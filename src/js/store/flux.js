const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listCharacter: [],
			listPlanet: [],
			listVehicle: [],
			listDetails: [],
			listDescription: [],
			favourite: [],
			numFavoutire: 0,
			
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
			},

			deleteFavourite: (i)=>{
				setStore({favourite: getStore().favourite.filter((item) => item != i)});
				setStore({numFavoutire: getStore().favourite.length})
			},

			login: async(email, password) =>{
				// console.log("funciona", email, password);
				try {
					let response = await fetch("https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/login", {
					  method: 'POST',
					  headers: {
						'Content-Type': 'application/json'
					  },
					  body: JSON.stringify({
						"email": email,
						"password": password
					  })
					});
				
					let data = await response.json();
					localStorage.setItem("token", data.access_token);
					console.log(data.access_token);
					if(response.status==200){
						return data.access_token;
					}
					
					return false;
					
				} 
				catch (error) {
					console.log(error);
					return false;
				}
			}

			// login: (email, password) =>{
			// 	fetch("https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/login", {
			// 			method: 'POST',
			// 			headers: {
			// 				'Content-Type': 'application/json'
			// 			},
			// 			body: JSON.stringify({
			// 				"email": email,
			// 				"password": password
			// 			})
			// 			})
			// 		.then(response => response.json())
			// 		.then(data => {
			// 			localStorage.setItem("token", data.access_token)
			// 			console.log(data);
			// 		})
			// 		.catch(error => {
			// 			console.log(error);
			// 		});
			// }
		}

	}
};


export default getState;
