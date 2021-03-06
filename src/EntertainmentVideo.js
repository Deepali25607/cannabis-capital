import React, { useState, useEffect } from 'react'
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import banner from './images/logo-bannerSection.png';
import ReactPlayer from 'react-player';
import Sponsors from './Sponsors';
function EntertainmentVideo() {
    const [video, setVideo] =useState ("")
    const [image, setImage] =useState ("")
    const [title, setTitle] =useState ("")
    const [content, setContent] =useState ("")
    const [date, setDate] =useState ("")
    useEffect(() => {
        fetch("https://dev.cannabiscapitol.com/api/get_video_detail")
            .then(res => res.json())
            .then(data => {
                // const videostore = data.data;
                console.log("video",data.data.video)
                let ContentSlice = data.data.video.content.slice(3, 30);
                    ContentSlice = ContentSlice.substring(0, ContentSlice.length - 4);
                    let dateSlice = data.data.video.updated_at.slice(0, 10);
                setVideo(data.data.video.file_path)
                setImage(data.data.video.image_path)
                setTitle(data.data.video.title)
                setContent(ContentSlice)
                setDate(dateSlice)
            })

    }, [])
console.log(video);
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

                                                    <ReactPlayer url={video} width="100%" height="450px" title="video" controls></ReactPlayer>

                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">PUFF PIECE</h4>
                                                    <h2 className="newscard--postTitle">Cypress Hill Gets a Hollywood Star</h2>
                                                    <span className="newscard--postDate"><i>{date}</i></span>
                                                    <p className="newscard--postPara">{content}</p>
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

                                            <img src={image} alt="" />


                                            <div className="newsGuest">

                                                <p>{title}</p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebarMain">
                                        <h3 className="sidebarTitle sec_title">Sponsors</h3>

                                        <div className="rightadv">
                                            {/* <img src={sponsor2} alt="" /> */}
                                            <Sponsors/>
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