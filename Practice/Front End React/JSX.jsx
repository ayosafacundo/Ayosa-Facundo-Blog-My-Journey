import React from 'react';

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <nav>
                <ul>
                    <li className="nav-link"><a href="#welcome-section">About</a></li>
                    <li className="nav-link"><a href="#projects">Portfolio</a></li>
                    <li  className="nav-link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    }
}
