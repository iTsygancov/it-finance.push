import { ReactComponent as IconNotificationsItem } from '../../../src/assets/IconNotificationsItem.svg';
import './Ticker.sass';


const cssPrefix = 'ticker';

function Ticker() {
	return (
		<div className={`${cssPrefix}`}>
			<div className={`${cssPrefix}__inner`}>
				<div className={`${cssPrefix}__body`}>
					<IconNotificationsItem />
					<div className={`${cssPrefix}__info`}>
						<p className={`${cssPrefix}__abbreviation`}>CCL</p>
						<p className={`${cssPrefix}__fullname`}>Carnival</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Ticker;