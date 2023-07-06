import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar';
import Alert from './components/alert';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>COTW Connect</h1>
				<Calendar />
				<Alert />
				<ThemeSwitcher />
			</header>
		</div>
	);
}

export default App;
