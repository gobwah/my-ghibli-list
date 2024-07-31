export type GhibliMovie = {
	id: string;
	title: string;
	original_title: string;
	original_title_romanised: string;
	image: string;
	movie_banner: string;
	description: string;
	director: string;
	producer: string;
	release_date: number;
	running_time: number;
	rt_score: number;
	people: string | string[];
	species: string | string[];
	locations: string | string[];
	vehicles: string | string[];
	url: string;
};

export type GhibliCharacter = {
	id: string;
	name: string;
	gender: string;
	age: number;
	eye_color: string;
	hair_color: string;
	films: string | string[];
	species: string | string[];
	url: string;
};

export type GhibliSpecie = {
	id: string;
	name: string;
	classification: string;
	eye_color: string;
	hair_color: string;
	people: string | string[];
	films: string | string[];
	url: string;
};

export type GhibliLocation = {
	id: string;
	name: string;
	climate: string;
	terrain: string;
	surface_water: string;
	residents: string | string[];
	films: string | string[];
	url: string;
};

export type GhibliVehicle = {
	id: string;
	name: string;
	description: string;
	vehicle_class: string;
	length: number;
	pilot: string;
	films: string | string[];
	url: string;
};
