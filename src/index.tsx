import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* どのコンポーネントもストアが使える 今ログインしているユーザーは誰？」といった情報を取り出せるようになる */}
      <App />
    </Provider>
  </React.StrictMode>
);

