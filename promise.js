class Artista {
	nombre = '';
	web = '';
	descripcion = '';
	bandas = [];
}

class Banda {
	nombre = '';
	integrantes = [];
	discografia = [];
}

class Discografia {
	nombre = '';
	anio = 0;
	genero = '';
	canciones = [];
}

class Cancion {
	nombre = '';
	duracion = '';
	puntuacion = 0;
	idTemaSpotify = 0;
}

var miArtistaFavorito = {
	nombre: 'Ciro',
	web: 'https://www.lospiojos.com.ar',
	descripcion: 'adasdasdasdasdasdggszfg',
	bandas: [
		{
			nombre: 'Los Piojos',
			integrantes: ['Tavo', 'Micky'],
			discografia: [
				{
					nombre: 'asdfad',
					anio: 1992,
					genero: 'rock',
					canciones: [
						{
							nombre: 'sdfadfs',
							duracion: '10:30',
							puntuacion: 5,
							idTemaSpotify: 124,
						},
						{
							nombre: 'asdfsdf',
							duracion: '3:33',
							puntuacion: 2,
							idTemaSpotify: 88,
						},
					],
				},
			],
		},
	],
};
