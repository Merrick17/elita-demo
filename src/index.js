import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store';
import { ToastProvider } from 'react-toast-notifications';
ReactDOM.render(
  <React.StrictMode>
    <ToastProvider
      autoDismiss
      autoDismissTimeout={6000}
     
      placement="top-right"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
