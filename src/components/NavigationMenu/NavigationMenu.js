import {NavLink} from 'react-router-dom';
import './NavigationMenu.sass';


const cssPrefix = 'navigationMenu';

function NavigationMenu() {
	return (<div className={`${cssPrefix}`}>
		<NavLink
			to={'/'}
			className={navData => `${cssPrefix}__button` + (navData.isActive ? ` ${cssPrefix}__button--active` : '')}
		>
			Портфель
		</NavLink>
		<NavLink
			to={'/favourite'}
			className={navData => `${cssPrefix}__button` + (navData.isActive ? ` ${cssPrefix}__button--active` : '')}
		>
			Избранное
		</NavLink>
	</div>);
}

export default NavigationMenu;
