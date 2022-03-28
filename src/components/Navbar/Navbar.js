import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../src/assets/logo.svg';
import Notifications from '../Notifications/Notifications';
import UserMenu from '../UserMenu/UserMenu';
import './Navbar.sass';


const cssPrefix = 'navbar';

function Navbar() {
	return (
		<header className='container'>
			<nav className={`${cssPrefix}`}>
				<Link to='/'>
					<Logo />
				</Link>
				<div className={`${cssPrefix}__list`}>
					<Notifications />
					<UserMenu />
				</div>
			</nav >
		</header>
	);
}

export default Navbar;