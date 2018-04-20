import React from 'react';
import GameWrapperContainer from './GameWrapper/GameWrapperContainer.js'

export default class App extends React.Component {
    render() {
        return (
            <div className="component__app">
                <GameWrapperContainer/>
            </div>
        );
    }
}
