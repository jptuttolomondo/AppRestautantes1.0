import ReactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'
import './components/styles/index.module.css';
import App from './components/app/App';
import reportWebVitals from './components/app/reportWebVitals';
import store from'./store/index'
import { Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
