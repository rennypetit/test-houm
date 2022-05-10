import { TypesDescriptionProps } from './types';
import styles from './Description.module.scss';

const Description = ({ data }: TypesDescriptionProps) => {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Features</h2>
			<div className={styles.features}>
				<ul>
					<li>
						<strong>Name: </strong>
						{data.name}
					</li>
					<li>
						<strong>Status: </strong>
						{data.status}
					</li>
					<li>
						<strong>Species: </strong>
						{data.species}
					</li>
					<li>
						<strong>Type: </strong>
						{data.type}
					</li>
					<li>
						<strong>Gender: </strong>
						{data.gender}
					</li>
					<li>
						<strong>Origin: </strong>
						<a
							href={data?.origin.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							{data?.origin.name}
						</a>
					</li>
					<li>
						<strong>Location: </strong>
						<a
							href={data?.location.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							{data?.location.name}
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Description;
