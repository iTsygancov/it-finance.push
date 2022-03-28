import { Grid, Row, Col } from 'react-flexbox-grid';
import Ticker from '../../../components/Ticker/Ticker';
import Select from 'react-select';
import './PortfolioItem.sass';


const cssPrefix = 'portfolioItem';

const options = [
	{value: '$', label: '$'},
	{value: '₽', label: '₽'},
	{value: '€', label: '€'},
	{value: '%', label: '%'}
];

const customStyles = {
	container: styles => ({ ...styles, '&:focus-visible': { outline: '1px solid #FFFFFF' } }),
	control: styles => (
		{
			...styles,
			justifyContent: 'space-evenly',
			cursor: 'pointer',
			padding: '6px',
			width: '4rem'
		}
	),
	indicatorSeparator: styles => ({ ...styles, display: 'none' }),
	singleValue: styles => ({ ...styles, color: '#999999' }),
	dropdownIndicator: styles => ({ ...styles, padding: '0', marginBottom: '3px' }),
	valueContainer: styles => ({ ...styles, padding: '0', flex: 'unset' }),
	menu: styles => (
		{
			...styles,
			borderRadius: '.5rem',
			boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.05)'
		}
	),
	option: (styles) => ({ ...styles, cursor: 'pointer' }
	),
};

function PortfolioItem () {
	return (
		<div className={`${cssPrefix}`}>
			<Grid>
				<Row middle='md'>
					<Col md={2} >
						<Ticker />
					</Col>
					<Col md={1} >
						<p className={`${cssPrefix}__title`}>456</p>
					</Col>
					<Col md={1} >
						<p className={`${cssPrefix}__title`}>21,50 $</p>
					</Col>
					<Col md={1} >
						<p className={`${cssPrefix}__title`}>21,33 $</p>
					</Col>
					<Col md={2} >
						<p className={`${cssPrefix}__title`}>−114,14 $ (0,97%)</p>
					</Col>
					<Col md={2} >
						<p className={`${cssPrefix}__title`}>11 739 $</p>
					</Col>
					<Col md={1} >
						<p className={`${cssPrefix}__title`}>20%</p>
					</Col>
					<Col md={2} >
						<div className={`${cssPrefix}__target`}>
							<input className={`${cssPrefix}__target-input`} type='text' />
							<Select
								options={options}
								defaultValue={options[0]}
								isSearchable={false}
								styles={customStyles}
							/>
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

export default PortfolioItem;
