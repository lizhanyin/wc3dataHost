import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './state/store';
import App from './App';
import './index.scss';

// Render the application into the DOM
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*
 * const globalState = useSelector((state) => state.global);
 * <>{globalState.title}</>
 * 
 * const dispatch = useDispatch();
 * onClick={() => dispatch(setTitle('dark'))}
 */