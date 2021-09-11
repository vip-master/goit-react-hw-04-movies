import ReactDOM from 'react-dom';
import './normalize.css';
import './globalStyles.css';
import App from './App/App'
import { BrowserRouter } from 'react-router-dom';

// import test from './test.js'

// test();

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
  document.getElementById('root')
);