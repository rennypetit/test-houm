import { TypesDataInfo, TypesDataResult } from '@types/globalTypes';

export interface TypesGetStaticProps {
	props: {
		data: {
			info: TypesDataInfo;
			results: TypesDataResult;
		} | null;
	};
	revalidate?: number;
}

export interface TypesDataProps {
	data: {
		info: TypesDataInfo;
		results: TypesDataResult;
		error: string | null | never;
	} | null;
}

export interface TypesCharacterInitialDataFilter {
	status: string;
	species: string;
	type: string;
	gender: string;
}
