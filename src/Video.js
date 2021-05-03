import React, { useState, useEffect } from 'react'
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import banner from './images/logo-bannerSection.png';
// import sponsor1 from './images/sponsor1.jpg';
import sponsor2 from './images/sponsor2.jpg';
// import sponsor3 from './images/sponsor3.jpg';
function Video() {
    const [video, setVideo] = useState([])
    // const [videoData, setVideoData] = useState([])
    useEffect(() => {
        fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLL3jD_qUrZ8NDZdqA5WIjNbMlm2EuV9R0&key=AIzaSyA6Ah_CjzrdnEu1-WDfHx1JlQJQoJnyFoA")
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const result = data.items.map(item => {

                    return { title: item.snippet.title, vid: item.contentDetails.videoId, thumbnails: item.snippet.thumbnails.default.url }
                    //  console.log(item.snippet.title,item.contentDetails.videoId)
                })

                setVideo(result)
                uid(result.vid)
                utit(result.title)
                uthumbnails(result.thumbnails)
                console.log(result)
            })
    }, [])
    const [vid, uid] = useState("")
    const [title, utit] = useState("")
    const [thumbnails, uthumbnails] = useState("")
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
                                                    
                                                    <iframe src={video[0].vid} width="100%" height="450px" frameBorder="0"
                                                    allowFullScreen="true" title="video"></iframe>
                                                    {/* <img src={post1} className="newscard--postThum" alt="" /> */}
                                                    {/* <Icon icon={playCircleOutline} color="white" className="newscard--playIcon" /> */}

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
                                                {/* <a href="Cannabiscapitalintertainment" className="newscard--linkDetails">More Video</a> */}
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
                                            <img src={video[0].thumbnails} alt="" />
                                           
                                        </div>
                                    </div>

                                    <div className="sidebarMain">
                                        <h3 className="sidebarTitle sec_title">Sponsors</h3>
                                        {/* <div className="rightadv">
                                            <img src={sponsor1} alt="" />
                                        </div> */}
                                        <div className="rightadv">
                                            <img src={sponsor2} alt="" />
                                        </div>
                                        {/* <div className="rightadv">
                                            <img src={sponsor3} alt="" />
                                        </div> */}
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
export default Video;