import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<DashboardRouter />} />
			</Routes>
		</BrowserRouter>
	)
}
