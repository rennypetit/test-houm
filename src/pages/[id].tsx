import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';

import MyHead from '../components/Head';
import Layout from 'layout';
import Banner from '@components/banner';
import Description from '@components/description';
import {
	TypesDataProps,
	TypesGetStaticPaths,
	TypesGetStaticProps,
} from './typesPost';

const Post = ({ data }: TypesDataProps) => {
	const router = useRouter();
	const canonical = `${process.env.NEXT_PUBLIC_BASE_URL}/${router.query.id}`;
	if (!data) return <Error statusCode={500} title='Internal Server Error.' />;
	return (
		<>
			<MyHead
				title={`${data.name} | HOUM`}
				image={data.image}
				canonical={canonical}
			/>
			<Layout>
				<main>
					<article>
						<Banner name={data.name} image={data.image} />
						<Description data={data} />
					</article>
				</main>
			</Layout>
		</>
	);
};

export async function getStaticPaths(): Promise<TypesGetStaticPaths> {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/character`);
		const posts = await res.json();
		const paths = posts.results.map((post: any) => ({
			params: { id: String(post.id) },
		}));
		return { paths, fallback: 'blocking' };
	} catch (error) {
		console.error('getStaticPaths', error);
		return { paths: null };
	}
}

export const getStaticProps: GetStaticProps = async ({
	params,
}): Promise<TypesGetStaticProps> => {
	if (!params?.id) return { props: { data: null } };
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/character/${String(params.id)}`
		);
		const data = await res.json();
		return {
			props: {
				data,
			},
			revalidate: 86400,
		};
	} catch (error) {
		return { props: { data: null } };
	}
};
export default Post;
