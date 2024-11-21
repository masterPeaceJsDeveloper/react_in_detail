import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            This is APP component

            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    debugger
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star () {
    return <div>star</div>
}

function Accordion() {
    debugger
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
