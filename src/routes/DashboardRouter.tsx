import { Navigate, Route, Routes } from 'react-router-dom'

import { HomePage } from '../pages/Home/HomePage'
import { SettingsPage } from '../pages/SettingsPage'

import { Layout } from '../components/Layout'

export const DashboardRouter = () => {
	return (
		<>
			{/* Layout */}
			<main className='bg-neutral-5 lg:p-8 p-0 h-screen w-screen'>
				<div className='lg:p-6 p-2 lg:rounded-3xl h-full'>
					<Layout>
						<Routes>
							<Route path='tasks' element={<HomePage />} />
							<Route path='settings' element={<SettingsPage />} />
							<Route path='/' element={<HomePage />} />
							<Route path="/*" element={<Navigate to="/" replace />} />
						</Routes>
					</Layout>
				</div>
			</main>
		</>
	)
}
