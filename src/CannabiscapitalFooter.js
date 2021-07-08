import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import facebook from './images/facebook.png';
import instagram1 from './images/instagram.png';
import youtube from './images/youtube.png';
import footer from './images/footer-logo.png';

function CannabiscapitalFooter() {

    return (
        <div>
            {/* <!-- Footer Section Start --> */}
            <footer className="footer">
                <div className="footer_wraper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="footercolWraper">
                                    <div className="footColOne">
                                        <div className="footer_logo">
                                            <img src={footer} alt="" />
                                        </div>
                                        <div className="footer_desc">
                                            <h3 className="sec_title">ABOUT CANNABIS CAPITOL</h3>
                                            <p>Cannabis Capitol is the community and industry’s leading informational hub. Our
                                            innovative approach to connect every aspect of the industry allows us to create
                                            the platform for voices to be heard and skills to be showcased. Cannabis Capitol
                                            is committed to giving a behind-the-scenes look into the lives of community
                                            leaders, innovators, activists, artists, consumers and companies. We are an all
                                            encompassing platform dedicated to educate, entertain and connect like-minded
                                        individuals. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-3">
                                <div className="footercolWraper">
                                    <div className="footColOne">
                                        <ul className="footer_links">
                                            <li className="link_item"><a href="Cannabiscapitalindex1">Home</a></li>
                                            <li className="link_item"><a href="Cannabiscapitalintertainment1">Intertainment</a></li>
                                            <li className="link_item"><a href="CannabiscapitalNews1">News</a></li>
                                            <li className="link_item"><a href="CannabiscapitalNetwork1">Networking</a></li>
                                            <li className="link_item"><a href="Cannabiscapitalcompound1">Creative Compound</a></li>
                                            <li className="link_item"><a href="CannabiscapitalArtical">Articles</a></li>
                                            <li className="link_item"><a href="CannabiscapitalVideo">Videos</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footercolWraper">
                                    <h3 className="sec_title">social</h3>
                                    <div className="footer_social">
                                        <a href="#!"><img src={facebook} alt="" /></a>
                                        <a href="#!"><img src={instagram1} alt="" /></a>
                                        <a href="#!"><img src={youtube} alt="" /></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default CannabiscapitalFooter;
