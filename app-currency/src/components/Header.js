import React from "react";
import Nav from './Nav';
import "./Header.css"

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="top-bar animated-dropdown">
                        <div className="main-header">
                            <div className="container">
                                <h1 className="site-title">React Lite Level</h1>
                            </div>
                           <Nav/>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header;