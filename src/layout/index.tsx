import Header from './header';
import Footer from './footer';

const Layout = ({
	children,
}: React.PropsWithChildren<{ children: object }>) => {
	return (
		<>
			<Header />
			<div className='container'>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
