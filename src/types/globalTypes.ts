export interface TypesDataResult {
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	origin: {
		url: string;
		name: string;
	};
	location: {
		url: string;
		name: string;
	};
}

export interface TypesDataInfo {
	count: number;
	next: string | null;
	prev: string | null;
}

export interface TypesDataGetStaticProps {
	props: {
		data: object | null;
	};
}

export interface TypeGetCharacterResponse {
	info: TypesDataInfo;
	results: TypesDataResult;
}
