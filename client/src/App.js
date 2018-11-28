import React, {Component} from 'react';
import './App.css';
import Lot from './Lot'
import NavigationBar from './NavigationBar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Аукцион</h1>
                    <NavigationBar/>
                </header>
                <p className="App-intro">
                    This project is a demo auction
                </p>
                <div className="App-lots">
                    <h1>Лоты</h1>
                    <Lot/>
                </div>
                <footer className="App-footer">
                    Обращайтесь к нам в любое время.
                </footer>
            </div>
        );
    }
}

export default App;