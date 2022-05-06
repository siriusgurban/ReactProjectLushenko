import React from "react";
import './Footer.css'

class Footer extends React.Component{
    render(){

        return(
        <div>
            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="footer-title"><a href="">2019 &copy; React Lite Level</a></h1>
                                <p>All Rights Reserved</p>
                            </div>

                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/sitemap/"></a>Site Map</li>
                                        <li><a href="/sitemaps.xml"></a>Site Map</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex-item">
                            <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/contact/"></a>Contacts</li>
                                        <li><a href="/d"></a>Guarantee</li>
                                        <li><a href="/s"></a>Abount Service</li>
                                        <li><a href="/o"></a>Turnback</li>
                                        <li><a href="/p"></a>Applying About Using Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                 <div className="copyright-bar" id="cookie_info">
                    <div className="flex-container">
                        <div className="flex-item">
                            <ul className="link"></ul>
                        </div>
                        <div className="flex-item">
                            <div className="clearfix payment-methods">
                                <ul>
                                    <img src="" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>      
        )
    }
}

export default Footer;