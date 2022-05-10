import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';
const Header = () => {
	return (
		<header className={styles.container}>
			<nav className={styles.row}>
				<Link href='/'>
					<a>
						<Image
							src='/images/logo-houm.svg'
							alt='logo houm'
							title='logo houm'
							width={90}
							height={45}
						/>
					</a>
				</Link>

				<a
					href='https://rickandmortyapi.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						src='/images/logo-rick-and-morty.svg'
						alt='logo Rick And Morty'
						title='logo Rick And Morty'
						width={130}
						height={85}
					/>
				</a>
			</nav>
		</header>
	);
};

export default Header;
