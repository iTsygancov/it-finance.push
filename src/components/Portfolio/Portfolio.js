import { Grid, Row, Col } from 'react-flexbox-grid';
import PortfolioItem from './_Item/PortfolioItem';
import './Portfolio.sass';
import Summary from '../../components/Summary/Summary';

const cssPrefix = 'portfolio';

function Portfolio () {
	return (
		<div className={`${cssPrefix}`}>
			<Summary />
			<Grid>
				<h1 className={`${cssPrefix}__title`}>Портфель</h1>
				<div className={`${cssPrefix}__header`}>
					<Row>
						<Col md={2} >
							<p className={`${cssPrefix}__header-title`}>Тикер</p>
						</Col>
						<Col md={1} >
							<p className={`${cssPrefix}__header-title`}>Количество</p>
						</Col>
						<Col md={1} >
							<p className={`${cssPrefix}__header-title`}>Ср. цена</p>
						</Col>
						<Col md={1} >
							<p className={`${cssPrefix}__header-title`}>Текущая цена</p>
						</Col>
						<Col md={2} >
							<p className={`${cssPrefix}__header-title`}>Прибыль</p>
						</Col>
						<Col md={2} >
							<p className={`${cssPrefix}__header-title`}>Стоимость бумаг</p>
						</Col>
						<Col md={1} >
							<p className={`${cssPrefix}__header-title`}>% Владения</p>
						</Col>
						<Col md={2} >
							<p className={`${cssPrefix}__header-title`}>Цель !</p>
						</Col>
					</Row>
				</div>
				<PortfolioItem />
			</Grid>
		</div>

	);
}

export default Portfolio;
