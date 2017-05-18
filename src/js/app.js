import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../sass/style.scss';

export class App extends React.Component {
    constructor() {
        super();

    }

    render(){
        return (
            <h1><i className="fa fa-spin fa-star"></i> Hello world</h1>
        )
    }
}

let app = document.getElementById("app");
ReactDOM.render(<App />, app);