'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import MainView from './components/MainView';

/**
 * This is the application's entry point.
 *
 * The application is written using the new ES6 syntax (for the most part).
 */
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainView>

            </MainView>);
    }
}

ReactDOM.render(<App/>, document.getElementById('content'));
