import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import banner from './images/intertainment.png';
import live from './images/live-post.png';
// import post2 from './images/post2.png';
// import post1 from './images/post1.jpg';
// import post3 from './images/post3.jpg';
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { API_URL } from '../../config';
const API_URL = {
    baseUrl: "https://dev.cannabiscapitol.com" || "http://dev.cannabiscapitol.com"
    // baseUrl: "http://3.143.208.162"
};
function Cannabiscapitalintertainment() {


    const [videoData, setVideoData] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
        
        axios.post(`${API_URL.baseUrl}/api/video-play-list?page=1&limit=3`)

        .then(res => setVideoData(res.data))

        .catch(err => console.log(err.message))
    }, [])
    console.log(videoData)
    // const token = "454550845829481|4ELIZbv-veq9he-3IamqOL5OQCs";
    // const Igtoken=  "IGQVJVLVI4YkJMRVl1ekxUNmFsQ1g3OU1kMmdfRFRsQW9XWk0yeTB6V210MEd1ZAzE4SEFHQUIzQUsxLV9pVnFFS3RYcUJhN2dhUVBON0tGUnRlQnp6Yk41NE9FMWpYbGxkaF9UNV9USkJrVjhQSDBkZAwZDZD"
    // const accesss="EAAGdaV2ysWkBANK4O714IaXIOhBkSkdZAczpsZBLaVOVWO8X5JCSiuQ8KeGZA9TZCA8ETrS96lw1UNBPltM0QqoKQc4dP9gQi4h0mn3dPs8osrMintYY7RrTb3sTmqZChWPvgozqNfqsjtFmO2VUtW84C8eqhBxdBg7hU6ZCQDyC8Iph4ZC4H497grKXSwuNOIsK4xAhLIANeZC24qY6mUeEyAqrbmA8AfyBqyrz7ekaxgZDZD"
    return (
        <div>
            <scrollTo />
            <CannabiscapitalHeader />
           <section classNameName="hm_banner">
        <div classNameName="banner_box">
            <img src={banner}  style={{"width":"100%"}}alt="" />
        </div>
    </section>

    <section className="wrap_con">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="intertainWraper">
                        <div className="intertainWraperIn">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="news_listBottom postTopLeftWraper">
                                        <ul className="newsList">
                                            <li className="newsListItem">
                                                <div className="intThumbnail">
                                                    <img src={live} alt="" />
                                                    <div className="showLive">
                                                        <span>Live</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="postTopRightWraper">
                                        <div className="newslistTop">
                                            <h2 className="newslistTop--title sec_title">Daily live streams</h2>
                                            <p className="newslistTop--content">
                                                Daily live streams from Cannabis Capitol studios featuring various cannabis
                                                personalities and influencers.
                                            </p>
                                        </div>
                                        <div className="news_listBottom">
                                            <ul className="newsList">
                                                <li className="newsListItem">
                                                    <div className="intDetails">
                                                        <h3 className="sec_title">LIve Now</h3>
                                                        <span className="episodeNumber">Cannabis Capitol Daily </span>
                                                        <span className="episodeNumber">@StonerShenanigans w/ </span>
                                                        <span className="episodeNumber">@CaliforniaClouds420</span>
                                                        <span className="episodeNumber">@JenniLovesDank</span>
                                                        <span className="episodeNumber">@JourdanJade, & @The_Faded_Kitten</span>
                                                        <p className="newsGuest"><a href="#!">Live now on twitch.tv/cannabiscapitol </a></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>




                    {videoData.data?.categories?.map((item) =>
                            (item.post_type === "2" ? (
                                <div className="intertainWraper" key={item.id}>
                                    <div className="intertainWraperIn">
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <div className="newslistTop" >
                                                    <h2 className="newslistTop--title sec_title">{item.title}</h2>
                                                    <Link className="newslistTop--readmore" to={`/morevids/${item.slug}`}>See More Videos &gt;&gt;</Link>
                                                    <p className="newslistTop--content">
                                                        <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                                    </p>

                                                </div>
                                                <div className="news_listBottom">
                                                    <ul className="newsList">
                                                        {item.videos?.map((val) => (
                                                            <li className="newsListItem" key={val.id}>
                                                                <Link to={`/video/${val.slug}`} className="newsListItemLink">
                                                                    <div className="intThumbnail">
                                                                        <img src={val.image_path} alt="" />
                                                                    </div>
                                                                    <div className="intDetails">
                                                                        <span className="newsTitle">{val.title.length > 20 ?
                                                                            (
                                                                                <><span dangerouslySetInnerHTML={{ __html: val.title.substring(0, 20) + "..." }} /></>
                                                                            ) :
                                                                            <> <span dangerouslySetInnerHTML={{ __html: val.title }} /></>
                                                                        }</span> <span
                                                                            className="episodeNumber">{item.title.length > 20 ?
                                                                                (
                                                                                    <><span dangerouslySetInnerHTML={{ __html: item.title.substring(0, 20) + "..." }} /></>
                                                                                ) :
                                                                                <> <span dangerouslySetInnerHTML={{ __html: item.title }} /></>
                                                                            }</span>
                                                                        <p className="newsGuest">{val.sub_title.length > 20 ?
                                                                            (
                                                                                <><span dangerouslySetInnerHTML={{ __html: val.sub_title.substring(0, 20) + "..." }} /></>
                                                                            ) :
                                                                            <> <span dangerouslySetInnerHTML={{ __html: val.sub_title }} /></>
                                                                        }</p>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>) : "")
                            )}

                        </div>
                    </div>
                </div>
            </section>


            <CannabiscapitalFooter />
        </div>
    )
}

export default Cannabiscapitalintertainment;

