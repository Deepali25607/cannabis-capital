import React, { useState, useEffect } from 'react'
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import banner from './images/logo-bannerSection.png';
import ReactPlayer from 'react-player';
import Sponsors from './Sponsors';
function NewsDetails() {
    const [news, setNews] = useState([])
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [date, setDate] = useState("")
    useEffect(() => {
        fetch("https://dev.cannabiscapitol.com/api/get_news_list?slug=well-done")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const result = data.data.posts.map((item) => {
                    return { image: item.image, content: item.content }
                })
                console.log("da", result);
                setNews(result)
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
                                            {/* {news.map((item) => { */}
                                                <div className="newscard--wrap ">

                                                    <div className="newscard--videoPlay">



                                                        {/* <img src={item.image} width="100%" height="450px" alt="img" /> */}

                                                    </div>
                                                    <div className="newscard--postCont">
                                                        <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                        <h2 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h2>
                                                        <span className="newscard--postDate"><i>jkdfh</i></span>
                                                        <p className="newscard--postPara">hjdhfais</p>
                                                    </div>

                                                </div>
                                            {/* })} */}
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

                                            {/* <img src={} alt="" /> */}


                                            <div className="newsGuest">

                                                <p>giugeujsh</p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebarMain">
                                        <h3 className="sidebarTitle sec_title">Sponsors</h3>

                                        <div className="rightadv">
                                            {/* <img src={sponsor2} alt="" /> */}
                                            <Sponsors />
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
export default NewsDetails;