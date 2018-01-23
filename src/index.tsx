import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
const rootEl = document.getElementById("root");

ReactDOM.render(
    <App />, 
    rootEl
);
// registerServiceWorker();
// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./App", () => {
        const NewApp = require("./App").default;

        ReactDOM.render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            rootEl
        );
    });
}

