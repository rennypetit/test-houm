import Image from 'next/image';

import { TypesBannerProps } from './types';
import styles from './Banner.module.scss';

const Banner = ({ name, image }: TypesBannerProps) => {
	return (
		<section className={styles.container}>
			<Image
				src={image}
				alt={`Image Character ${name}`}
				title={name}
				width={300}
				height={300}
			/>
			<h1 className={styles.title}>{name}</h1>
		</section>
	);
};

export default Banner;
