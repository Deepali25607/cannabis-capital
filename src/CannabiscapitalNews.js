import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import news from './images/news-banner.jpg';
import post1 from './images/post1.jpg';
import post2 from './images/post2.png';
import post3 from './images/post3.jpg';
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import axios from "axios";

function CannabiscapitalNews() {
    const [newslist, setNewslist] = useState([])
    useEffect(() => {
        
        axios.get("https://dev.cannabiscapitol.com/api/get_news_detail?slug=well-done")
        

            .then(res => setNewslist(res.data))
            
            .catch(err => console.log(err.message))
    }, [])
     console.log(newslist)
    console.log(newslist.data)
    console.log(newslist.data.post.image)
    // return(<div>
        
    // </div>)
    return (
        <div>
            <CannabiscapitalHeader />
            <section className="hm_banner">
                <div className="banner_box">
                    <img src={news} className="" alt="" />
                </div>
            </section>

            <section className="wrap_con">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="leftWrap">
                                <div className="leftWrapin">
                                    <div className="cardMain list-wrapper">
                                        <div className="newscard list-item">
                                            <div className="newscard--wrap ">
                                                <div className="newscard--videoPlay">
                                                <img src={newslist.data.post.image}  className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                <img src={newslist.data.post.image}  className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">Entertainment</h4>
                                                    <h3 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>


                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post3} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">THCA: The Benefits, Effects, and Future</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post1} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post1} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">High Jinx Episode 1</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>
                                        <div className="newscard list-item">
                                            <div className="newscard--wrap ">
                                                <div className="newscard--videoPlay">
                                                    <img src={post1} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">Entertainment</h4>
                                                    <h3 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>


                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post3} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">THCA: The Benefits, Effects, and Future</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post1} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post1} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">High Jinx Episode 1</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">High Jinx Episode 1</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">High Jinx Episode 1</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">High Jinx Episode 1</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">High Jinx Episode 1</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h3 className="newscard--postTitle">High Jinx Episode 1</h3>
                                                    <span className="newscard--postDate"><i>February 20, 2021 by John
                                                    Smith</i></span>
                                                    <p className="newscard--postPara">Cypres Hill makes History! And as cannabis
                                                    advocates since
                                                    the 90s, its awesome to see legends getting their place on the Hollywood
                                                    Walk Of
                                                    Fame. Bump some Cypress Hill today in love for the first of many for the
                                                    Latino Hip
                                                Hop group!</p>
                                                </div>
                                                <a href="#!" className="newscard--linkDetails">Continue Reading</a>
                                            </div>
                                        </div>


                                    </div>

                                    <div id="pagination-container"></div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <CannabiscapitalFooter />
        </div>
    )
}

export default CannabiscapitalNews