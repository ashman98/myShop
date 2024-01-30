import React, {createContext, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import {HelmetProvider} from "react-helmet-async";
import { BrowserRouter } from 'react-router-dom';


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Context.Provider value={{
        user : new UserStore(),
        devices: new DeviceStore(),
    }}>
        <HelmetProvider>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}> {/*loading ogtagorcelu hnaravorrutyun*/}
                    <App />
                </Suspense>
            </BrowserRouter>
      </HelmetProvider>
    </Context.Provider>
  </React.StrictMode>
);
reportWebVitals();
