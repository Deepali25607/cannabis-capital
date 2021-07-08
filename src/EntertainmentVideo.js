import React, { useState, useEffect } from 'react'
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import banner from './images/logo-bannerSection.png';
import sponsor2 from './images/sponsor2.jpg';

function EntertainmentVideo() {
    const [video, setVideo] = ("")
    useEffect(() => {
        fetch("https://dev.cannabiscapitol.com/api/featured-video")
            .then(res => res.json())
            .then(data => {
                const videostore = data.data.video.file_path;
                console.log("video",videostore)
              const hello=  videostore.map(item => {
                    return { videopath: item.file_path }
                })
                setVideo(hello)
            })

    }, [])

    return (
        <div>
            <CannabiscapitalHeader />
            <section className="logoBanner">
                <div className="container">
                    <div className="logoBanner--wraper">
                        <img src={banner} alt="" />
                    </div>
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

                                                    <iframe src={video} width="100%" height="450px" frameBorder="0"
                                                        allowFullScreen="true" title="video"></iframe>

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

                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="rightWrap">
                                <div className="rightWrapinIn">
                                    <div className="sidebarMain searchSidebar">
                                    </div>

                                    <div className="sidebarMain">
                                        <h3 className="sidebarTitle sec_title">Related Video</h3>
                                        <div className="rightadv">

                                            <img src={banner} alt="" />


                                            <div className="newsGuest">

                                                <p>Hello</p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebarMain">
                                        <h3 className="sidebarTitle sec_title">Sponsors</h3>

                                        <div className="rightadv">
                                            <img src={sponsor2} alt="" />
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
export default EntertainmentVideo;