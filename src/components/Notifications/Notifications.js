import {
	Menu, MenuButton, MenuList
} from '@reach/menu-button';
import { ReactComponent as Bell } from '../../../src/assets/bell.svg';
import NotificationsItem from './_Item/NotificationsItem';
import './Notifications.sass';


const cssPrefix = 'notifications';

function Notifications () {
	return (
		<Menu className={`${cssPrefix}`}>
			<MenuButton className={`${cssPrefix}__button`}>
				<Bell />
			</MenuButton>
			<MenuList className={`${cssPrefix}__menu`}>
				<NotificationsItem classNamePrefix={cssPrefix} />
			</MenuList>
		</Menu>
	);
}

export default Notifications;