import React from 'react';
import './App.css';

function App() {
  class NavBar extends React.Component {
    render() {
        return <nav>
                <ul>
                    <li className="nav-link"><a href="#about">About</a></li>
                    <li className="nav-link"><a href="#projects">Portfolio</a></li>
                    <li className="nav-link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    }
  }
  return (
      <header>
        <NavBar/>
      </header>
  );
}

export default App;
