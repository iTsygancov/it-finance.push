import { MenuItem } from '@reach/menu-button';
import { ReactComponent as IconNotificationsItem } from '../../../../src/assets/IconNotificationsItem.svg';
import './NotificationsItem.sass';


const cssPrefix = 'notificationsItem';

function NotificationsItem () {
	return (
		<>
			<MenuItem className={`${cssPrefix}`}>
				<div className={`${cssPrefix}__inner`}>
					<span className={`${cssPrefix}__status`}></span>
					<div className={`${cssPrefix}__body`}>
						<IconNotificationsItem />
						<div className={`${cssPrefix}__info`}>
							<p className={`${cssPrefix}__abbreviation`}>CCL</p>
							<p className={`${cssPrefix}__fullname`}>Carnival</p>
						</div>
					</div>
				</div>
			</MenuItem>
			<MenuItem className={`${cssPrefix}`}>
				<div className={`${cssPrefix}__inner`}>
					<span className={`${cssPrefix}__status`}></span>
					<div className={`${cssPrefix}__body`}>
						<IconNotificationsItem />
						<div className={`${cssPrefix}__info`}>
							<p className={`${cssPrefix}__abbreviation`}>CCL</p>
							<p className={`${cssPrefix}__fullname`}>CarnivalCarnivalCarnivalCarnival</p>
						</div>
					</div>
				</div>
			</MenuItem>
		</>
	);
}

export default NotificationsItem;