import React from "react";
import "./Nav.css"

class Nav extends React.Component {
    render() {
        return (
            <div>
                
                            <div className="main-nav">
                                <div className="container">
                                    <ul>
                                        <li><a href="#">Main</a></li>
                                        <li><a href="#">Exchange Point</a></li>
                                        <li><a href="#">Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                
                   
            </div>
        )
    }
}

export default Nav;