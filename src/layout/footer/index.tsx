import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';
const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.row}>
				<Link href='/'>
					<a>
						<Image
							src='/images/logo-houm-footer.svg'
							alt='logo houm'
							title='logo houm'
							width={220}
							height={102}
						/>
					</a>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
