import { TypesDataResult } from '@types/globalTypes';

export interface TypesGetStaticProps {
	props: {
		data: TypesDataResult | null;
	};
	revalidate?: number;
}

export interface TypesGetStaticPaths {
	paths: string | null;
	fallback?: string;
}

export interface TypesDataProps {
	data: TypesDataResult | null;
}
