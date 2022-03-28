import {Grid, Row, Col} from 'react-flexbox-grid';
import PortfolioItem from './_Item/PortfolioItem';
import './Portfolio.sass';
import Summary from '../Summary/Summary';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import { useEffect, useState } from 'react';

// const apiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox/sandbox/register';
const secretToken = 't.WOiD-lYhQhm-7_qSWstYoxrPmsx4_3qElFQw9SIIDcydk1JdftXQ4C4DghLPTixRuJZxuyyixXrJxR1RsfgNcA';

const requestOptions = {
	method: 'GET',
	headers: {
		'Authorization': `Bearer ${secretToken}`
	},
	redirect: 'follow'
};


const cssPrefix = 'portfolio';


function Portfolio() {

	const [portfolioPositions, setPortfolioPositions] = useState({});

	useEffect(() => {
		fetch('https://api-invest.tinkoff.ru/openapi/user/accounts', requestOptions)
			.then(response => response.json())
			.then(json => setPortfolioPositions(json.payload.positions))
			.catch(error => console.log('error', error));
	}, []);

	return (
		<>
			<NavigationMenu/>
			<div className={`${cssPrefix}`}>
				<Summary/>
				<Grid>
					<h1 className={`${cssPrefix}__title`}>Портфель</h1>
					<div className={`${cssPrefix}__header`}>
						<Row>
							<Col md={2}>
								<p className={`${cssPrefix}__header-title`}>Тикер</p>
							</Col>
							<Col md={1}>
								<p className={`${cssPrefix}__header-title`}>Количество</p>
							</Col>
							<Col md={1}>
								<p className={`${cssPrefix}__header-title`}>Ср. цена</p>
							</Col>
							<Col md={1}>
								<p className={`${cssPrefix}__header-title`}>Текущая цена</p>
							</Col>
							<Col md={2}>
								<p className={`${cssPrefix}__header-title`}>Прибыль</p>
							</Col>
							<Col md={2}>
								<p className={`${cssPrefix}__header-title`}>Стоимость бумаг</p>
							</Col>
							<Col md={1}>
								<p className={`${cssPrefix}__header-title`}>% Владения</p>
							</Col>
							<Col md={2}>
								<p className={`${cssPrefix}__header-title`}>Цель !</p>
							</Col>
						</Row>
					</div>
					<PortfolioItem
						portfolioPositions={portfolioPositions}
					/>
				</Grid>
			</div>
		</>

	);
}

export default Portfolio;
