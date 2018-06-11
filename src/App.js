import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Chat from './Chat';
import './App.css';


const userState = ['@john', '@alex', '@chris'];
const reducer = (state=userState, action) => {
    if(action.type === 'ADD_NEW_USER') {
        return state.concat('@newuser_' + Date.now());
    }
    return state;
};

const store = createStore(reducer);
window.store = store;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Chat/>
                </div>
            </Provider>
        );
    }
}

export default App;
