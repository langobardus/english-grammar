import { FC } from 'react';
import './App.css';
import { ClientsAndSalesInPage } from 'components/ClientsAndSalesInPage';
// import 'antd/dist/antd.css';

const App: FC = () => {
	return (
		<div style={{ padding: '40px' }}>
			<ClientsAndSalesInPage />
		</div>
	);
};

export default App;
