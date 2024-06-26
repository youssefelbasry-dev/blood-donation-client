import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import App from "./App";

const elm=document.getElementById("root");
const root=ReactDOM.createRoot(elm);

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
);