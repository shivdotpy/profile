import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Namesection from './components/sections/Namesection'
import Imagesection from './components/sections/Imagesection'
import Introsection from './components/sections/Introsection'
import Whatcanidosection from "./components/sections/Whatcanidosection";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*http://seanhalpin.io/*/}
                <Header/>
                <Namesection/>
                <Imagesection/>
                <Introsection />
                <Whatcanidosection/>
            </div>
        );
    }
}

export default App;
