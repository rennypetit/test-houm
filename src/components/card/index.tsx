import Image from 'next/image';
import Link from 'next/link';

import { TypeCardProps } from './types';
import styles from './Card.module.scss';
import React from 'react';

const Card = ({ data: { id, name, image } }: TypeCardProps) => {
	return (
		<article className={styles.container}>
			<Link href={`/${id}`}>
				<a>
					<div className={styles.image}>
						<Image
							src={image}
							alt={`Image Character ${name}`}
							title={name}
							width={300}
							height={300}
							layout='responsive'
						/>
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>{name}</h3>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default React.memo(Card, (prevProps, nextProps) => {
	return prevProps.data.id === nextProps.data.id;
	// evitar el renderizar los cards previos al momento de actualizar el state.
});
