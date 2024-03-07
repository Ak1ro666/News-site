import { render } from 'react-dom';
import App from './app/App';
import { someFn } from './test';

someFn(17);

render(<App />, document.getElementById('root'));

