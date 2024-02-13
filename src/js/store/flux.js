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
				fetch(`https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/persons`)
					.then(response => response.json())
					.then(data => setStore({ listCharacter: data.result }))
					.catch(error => {
						console.log(error);
					});
			},

			getPlanet: () => {
				fetch(`https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/planets/`)
					.then(response => response.json())
					.then(data => setStore({ listPlanet: data.result }))
					.catch(error => {
						console.log(error);
					});
			},

			getVehicle: () => {
				fetch(`https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/vehicles/`)
					.then(response => response.json())
					.then(data => setStore({listVehicle: data.result }))
					.catch(error => {
						console.log(error);
					});
			},

			getDetail: async(url) =>{
				try{
					let response = await fetch(url)
					let data = await response.json()
					setStore({ listDetails: data.result, listDescription: data.result.description })
				}
				catch (error) {
					console.log(error)
				}
				
					// .then(response => response.json())
					// .then(data => setStore({ listDetails: data.result, listDescription: data.result.description }))
					// .catch(error => {
					// 	console.log(error);
					// });
			},

			login: async(email, password) =>{
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
					if(response.status>=200 && response.status<300){
						localStorage.setItem("token", data.access_token);
						return true;
					}
					console.log(response.status, data.msg);
															
				} 
				catch (error) {
					console.log(error);
					return false;
				}
			},


			addFavourite: (item, url)=>{
				const itemFav = getStore().favourite.map(nombre => nombre.name)
				if (!itemFav.includes(item)){
					setStore({favourite: getStore().favourite.concat({name: item, url: url})})
					setStore({numFavoutire: getStore().favourite.length})
				}
			
			},

			getFavourite: () => {
				let token = localStorage.getItem("token")
				fetch(`https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/user/favorites`, {
					headers: {
						'Content-Type': 'application/json',
						  'Authorization': `Bearer ${token}`
					}
				  })
				.then(response => response.json()) // Devolver la promesa que resuelve en el cuerpo JSON
				.then(data => {
						setStore({ favourite: data.favourite})
						setStore({numFavoutire: getStore().favourite.length})
				})	

				.catch(error => {
					console.log(error);
				});
			},

			addFavouritePerson: async(id, name, url)=>{
				let token = localStorage.getItem("token")
				const idFav = getStore().favourite.map(item => item.info.name)
				if (!idFav.includes(name)){
					try {
						let response = await fetch(`https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/user/favorites/persons/${id}`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
						body: JSON.stringify({
							"url": url,
						})
						});
					
						let data = await response.json();
						if(response.status>=200 && response.status<300){
							getActions().getFavourite()
						}
						console.log(data);
																
					} 
					catch (error) {
						console.log(error);
						return false;
					}
				}
			},

			addFavouritePlanet: async(id, name, url)=>{
				let token = localStorage.getItem("token")
				const idFav = getStore().favourite.map(item => item.info.name)
				if (!idFav.includes(name)){
					try {
						let response = await fetch(`https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/user/favorites/planets/${id}`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
						body: JSON.stringify({
							"url": url,
						})
						});
					
						let data = await response.json();
						if(response.status>=200 && response.status<300){
							getActions().getFavourite()
						}
						console.log(data);
																
					} 
					catch (error) {
						console.log(error);
						return false;
					}
				}
			},

			addFavouriteVehicle: async(id, name, url)=>{
				let token = localStorage.getItem("token")
				const idFav = getStore().favourite.map(item => item.info.name)
				if (!idFav.includes(name)){
					try {
						let response = await fetch(`https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/user/favorites/vehicles/${id}`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
						body: JSON.stringify({
							"url": url,
						})
						});
					
						let data = await response.json();
						if(response.status>=200 && response.status<300){
							getActions().getFavourite()
						}
						console.log(data);
																
					} 
					catch (error) {
						console.log(error);
						return false;
					}
				}
			},

			deleteFavourite: async(id)=>{
				let token = localStorage.getItem("token")
					try {
						let response = await fetch(`https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/user/favorites/${id}`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						}
						});
					
						let data = await response.json();
						if(response.status>=200 && response.status<300){
							getActions().getFavourite()
						}
						console.log(data);
																
					} 
					catch (error) {
						console.log(error);
						return false;
					}
			},
		}

	}
};


export default getState;
