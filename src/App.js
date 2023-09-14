// App.js
import  { Component } from 'react';
import './App.css';
import MainPage from "./pages/MainPage";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="w3-container w3-center w3-padding-32">
                    <h1><b>MY BLOG</b></h1>
                    <p>Welcome to the blog of <span className="w3-tag">unknown</span></p>
                </header>

                <div className="w3-row">
                    <MainPage/>
                </div>
            </div>
        );
    }
}

export default App;
