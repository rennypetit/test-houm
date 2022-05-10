import { TypeGetCharacterResponse } from '@types/globalTypes';
import { TypesCharacterInitialDataFilter } from 'pages/typesPage';

export const GetCharactersFilter = async ({
	status,
	species,
	type,
	gender,
}: TypesCharacterInitialDataFilter): Promise<TypeGetCharacterResponse | null> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/character/?status=${status}&species=${species}&type=${type}&gender=${gender}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			}
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('error in API - infinity scroll', error);
		return null;
	}
};

export const GetCharactersInfinityScroll = async (
	url: string
): Promise<TypeGetCharacterResponse | null> => {
	try {
		const response = await fetch(`${url}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('error in API - infinity scroll', error);
		return null;
	}
};
