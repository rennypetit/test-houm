import Head from 'next/head';
const MyHead = ({
	title = '',
	description = 'Prueba HOUM',
	image = '',
	canonical = '',
}) => {
	const jsonLD = {
		'@context': 'https://example.com',
		'@id': 'https://example.com',
		name: title,
	};
	return (
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta
				content='width=device-width,initial-scale=1,maximum-scale=5'
				name='viewport'
			/>
			<meta name='robots' content='index' />

			{/* navegador */}
			<meta name='title' content={title} />
			<meta name='description' content={description} />
			<link rel='canonical' href={canonical} />

			{/* opengraph */}
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={canonical} />
			<meta property='og:image' content={image} />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='HOUM' />
			<meta property='og:locale' content='es_CO' />
			<meta property='og:image:width' content='300' />
			<meta property='og:image:height' content='300' />

			{/* twitter */}
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:url' content={canonical} />
			<meta name='twitter:image' content={image} />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:site' content='HOUM' />

			{/* favicon */}
			<link
				rel='shortcut icon'
				href={`/images/favicon.png`}
				type='image/x-icon'
			/>
			<link rel='icon' href={`/images/favicon.png`} type='image/x-icon' />
			{/* JSON-LD */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
			/>
		</Head>
	);
};

export default MyHead;
