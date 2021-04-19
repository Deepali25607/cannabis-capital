import React from 'react'
import Pagination from './Pagination';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import banner from './images/banner.png';
import post1 from './images/post1.jpg';
import post2 from './images/post2.png';
import post3 from './images/post3.jpg';
import instagram from './images/instagram.jpg';
import sponsor1 from './images/sponsor1.jpg';
import sponsor2 from './images/sponsor2.jpg';
import sponsor3 from './images/sponsor3.jpg';
import { Icon } from '@iconify/react';
import playCircleOutline from '@iconify-icons/mdi/play-circle-outline';
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';


function Cannabiscapitalindex() {




    return (
        <div>

            <CannabiscapitalHeader />

            <section className="hm_banner">
                <div className="banner_box">
                    <img src={banner} className="" alt="banner" />
                </div>
            </section>

            <section className="wrap_con">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="leftWrap">
                                <div className="leftWrapin">
                                    <div className="cardMain list-wrapper">
                                        <div className="newscard list-item firstNews">
                                            <div className="newscard--wrap ">
                                                <div className="newscard--videoPlay">
                                                    <img src={post1} className="newscard--postThum" alt="" />
                                                    <Icon icon={playCircleOutline} color="white" className="newscard--playIcon" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h2 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h2>
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
                                                <a href="#!" className="newscard--linkDetails">More Video</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="post2" />
                                                </div>
                                                <div classNameName="newscard--postCont">
                                                    <h4 className="newscard--postCategory">Entertainment</h4>
                                                    <h2 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h2>
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
                                                <a href="#!" className="newscard--linkDetails">More Video</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post1} className="newscard--postThum" alt="post1" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h2 className="newscard--postTitle">Marlboro Man Meets Marijuana: Big Tobacco
                                                Bets On Bong Rips</h2>
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
                                                <a href="#!" className="newscard--linkDetails">More Video</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post3} className="newscard--postThum" alt="post3" />
                                                    <Icon icon={playCircleOutline} color="white" className="newscard--playIcon" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h2 className="newscard--postTitle">THCA: The Benefits, Effects, and Future</h2>
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
                                                <a href="#!" className="newscard--linkDetails">More Video</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post1} className="newscard--postThum" alt="" />
                                                    <Icon icon={playCircleOutline} color="white" className="newscard--playIcon" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h2 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h2>
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
                                                <a href="#!" className="newscard--linkDetails">More Video</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post1} className="newscard--postThum" alt="post1" />
                                                    <Icon icon={playCircleOutline} color="white" className="newscard--playIcon" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h2 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h2>
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
                                                <a href="#!" className="newscard--linkDetails">More Video</a>
                                            </div>
                                        </div>

                                        <div className="newscard list-item">
                                            <div className="newscard--wrap">
                                                <div className="newscard--videoPlay">
                                                    <img src={post2} className="newscard--postThum" alt="" />
                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h2 className="newscard--postTitle">High Jinx Episode 1</h2>
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
                                                <a href="#!" className="newscard--linkDetails">More Video</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Pagination postsPerPage={postPerPage} totalPosts={postsData.data?.total_count} paginate={paginate} currentPage={currentPage}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="rightWrap">
                                <div className="rightWrapinIn">
                                    <div className="sidebarMain searchSidebar">
                                        <form className="formSidebar" action="">
                                            <input type="search" name="search" className="searchRight"
                                                placeholder="Search and hit etner..." />
                                        </form>
                                    </div>
                                    <div className="sidebarMain newsletterSidebar">
                                        <h3 className="sidebarTitle sec_title">Newsletter</h3>
                                        <form className="formSidebar" action="">
                                            <label for="">Email Address</label>
                                            <input type="email" name="email" className="searchRight"
                                                placeholder="Your Email Address" />
                                            <input type="submit" value="Sign Up" />
                                        </form>
                                    </div>
                                    <div className="sidebarMain">
                                        <h3 className="sidebarTitle sec_title">Instagram</h3>
                                        <div className="rightadv">
                                            <img src={instagram} alt="" />
                                        </div>
                                    </div>

                                    <div className="sidebarMain">
                                        <h3 className="sidebarTitle sec_title">Sponsors</h3>
                                        <div className="rightadv">
                                            <img src={sponsor1} alt="" />
                                        </div>
                                        <div className="rightadv">
                                            <img src={sponsor2} alt="" />
                                        </div>
                                        <div className="rightadv">
                                            <img src={sponsor3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
            </div>
            <CannabiscapitalFooter />
        </div>
    )
}


export default Cannabiscapitalindex;
