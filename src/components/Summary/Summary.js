import Select from 'react-select';
import {ReactComponent as IconCase} from '../../assets/case.svg';
import {ReactComponent as IconArrowGreen} from '../../assets/arrow--green.svg';
import {ReactComponent as IconArrowRed} from '../../assets/arrow--red.svg';
import './Summary.sass';


const cssPrefix = 'summary';

const data = {
	price: 123123,
	profit: 100000,
	yield: -123,
	options: [
		{
			label: 'В рублях',
			value: 'В рублях'
		},
		{
			label: 'В долларах',
			value: 'В долларах'
		},
		{
			label: 'В евро',
			value: 'В евро'
		},
	]
};

const colourStyles = {
	container: styles => ({...styles, '&:focus-visible': {outline: '1px solid #FFFFFF'}}),
	control: styles => (
		{
			...styles,
			border: 'none',
			outline: 'none !important',
			justifyContent: 'flex-start',
			boxShadow: 'none',
			cursor: 'pointer'
		}
	),
	indicatorSeparator: styles => ({...styles, display: 'none'}),
	singleValue: styles => ({...styles, color: '#999999'}),
	dropdownIndicator: styles => ({...styles, padding: '0'}),
	valueContainer: styles => ({...styles, padding: '0', flex: 'unset'}),
	menu: styles => (
		{
			...styles,
			borderRadius: '.5rem',
			boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.05)'
		}
	),
	option: (styles) => ({...styles, cursor: 'pointer'}
	),
};

const numberWithSpaces = (x) => {
	const parts = x.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	return parts.join('.');
};

function Summary() {
	return (
		<div className='container'>
			<div className={`${cssPrefix}`}>
				<div className={`${cssPrefix}__block`} style={{minWidth: '238px'}}>
					<Select
						className={`${cssPrefix}__select`}
						defaultValue={data.options[0]}
						isSearchable={false}
						options={data.options}
						styles={colourStyles}
					/>
					<div className={`${cssPrefix}__info`}>
						<span className={`${cssPrefix}__count`} style={{color: '#000'}}>
							{numberWithSpaces(data.price)}
						</span>
						<div className={`${cssPrefix}__icon`}>
							<IconCase/>
						</div>
					</div>
				</div>
				<div className={`${cssPrefix}__block`} style={{minWidth: '342px'}}>
					<Select
						className={`${cssPrefix}__select`}
						defaultValue={data.options[0]}
						isSearchable={false}
						options={data.options}
						styles={colourStyles}
					/>
					<div className={`${cssPrefix}__info`}>
						<div
							className={data.profit >= 0
								? `${cssPrefix}__count`
								: `${cssPrefix}__count ${cssPrefix}__count--red`}
						>
							{data.profit > 0
								? `+${data.profit}`
								: data.profit
							}
						</div>
						<div className={`${cssPrefix}__icon`}>
							{data.profit > 0 ? <IconArrowGreen/> : <IconArrowRed/>}
						</div>
					</div>
				</div>
				<div className={`${cssPrefix}__block`} style={{minWidth: '264px'}}>
					<Select
						className={`${cssPrefix}__select`}
						defaultValue={data.options[0]}
						isSearchable={false}
						options={data.options}
						styles={colourStyles}
					/>
					<div className={`${cssPrefix}__info`}>
						<div
							className={data.yield >= 0 ? `${cssPrefix}__count` : `${cssPrefix}__count ${cssPrefix}__count--red`}>
							{data.yield > 0
								? `+${data.yield}`
								: data.yield
							}
						</div>
						<div className={`${cssPrefix}__icon`}>
							{data.yield > 0 ? <IconArrowGreen/> : <IconArrowRed/>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Summary;
