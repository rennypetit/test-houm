import type { GetStaticProps } from 'next';
import Error from 'next/error';

import Head from '@components/Head';
import Layout from 'layout';
import ContainerHome from '@container/ContainerHome';
import { TypesDataProps, TypesGetStaticProps } from './typesPage';

function HomePage({ data }: TypesDataProps) {
	if (!data) return <Error statusCode={500} title='Internal Server Error.' />;
	if (data.error) return <Error statusCode={404} title='Not found' />;
	return (
		<>
			<Head title={'Nuestros personajes favoritos - Rick and Morty | HOUM'} />
			<Layout>
				<h1 className='title'>
					Nuestros personajes favoritos <span>Rick and Morty</span>
				</h1>
				<ContainerHome data={data} />
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps =
	async (): Promise<TypesGetStaticProps> => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/character`
			);
			const data = await response.json();
			return { props: { data }, revalidate: 86400 };
		} catch (error) {
			return { props: { data: null } };
		}
	};

export default HomePage;
