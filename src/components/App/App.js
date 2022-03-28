import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Portfolio from '../Portfolio/Portfolio';
import Settings from '../../pages/Settings';
import Favourite from '../Favourite/Favourite';
import NotFound from '../../pages/NotFound';


function App () {
	return (
		<Routes>
			<Route exact path='/' element={<Layout />}>
				<Route path='/' element={<Portfolio />} />
				<Route path='settings' element={<Settings />} />
				<Route path='favourite' element={<Favourite />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
