import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button';
import './UserMenu.sass';

const cssPrefix = 'usermenu';

function UserMenu () {
	return (
		<Menu className={`${cssPrefix}`}>
			<MenuButton className={`${cssPrefix}__button`}>
				И
			</MenuButton>
			<MenuList className={`${cssPrefix}__menu`}>
				<MenuItem>
					<Link to='/settings' className={`${cssPrefix}__link`}>
						Настройки
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/' className={`${cssPrefix}__link ${cssPrefix}__link--red`}>
						Выйти
					</Link>
				</MenuItem>
			</MenuList>
		</Menu>
	);
}

export default UserMenu;