import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import banner from './images/intertainment.png';
import axios from 'axios';
import ReactPlayer from 'react-player'
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import {TwitchPlayer}  from 'react-twitch-embed';
import OwlCarousel from 'react-owl-carousel-loop';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLL3jD_qUrZ8NDZdqA5WIjNbMlm2EuV9R0&key=AIzaSyA6Ah_CjzrdnEu1-WDfHx1JlQJQoJnyFoA
const Cannabiscapitalintertainment = ()=> {
    let CHANNELID = "UC1pb1oF42Wz0YwjQRKQBv5Q"
    const [video, setVideo] = useState([])
    const [data, setData] = useState([])
    const [realTimeVideo, setrealTimeVideo]=useState(" ")
    const [videoDetails, setVideoDetails]=useState(" ")
    const getVideo = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${CHANNELID}&maxResults=28&key=AIzaSyA6Ah_CjzrdnEu1-WDfHx1JlQJQoJnyFoA`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const result = data.items.map((item) => {
                    // return { title: item.snippet.title, id: item.id, thumbnails: item.snippet.thumbnails.medium.url }
                    if (item.contentDetails.itemCount > 0) {
                        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=4&playlistId=${item.id}&key=AIzaSyA6Ah_CjzrdnEu1-WDfHx1JlQJQoJnyFoA `)

                            .then(Response => Response.json())
                            .then(video => {
                                // console.log("Hello",video);
                                const resultplay = video?.items?.map((itemplay) => {
                                    return { title: itemplay?.snippet?.title, vid: itemplay?.contentDetails.videoId, playlistid: itemplay.snippet.playlistId, thumbnails: itemplay?.snippet?.thumbnails?.medium?.url }
                                    // console.log(itemplay?.snippet?.thumbnails?.medium?.url);

                                })
                                // console.log("Excuse", resultplay);
                                setVideo(resultplay)

                            })
                    }
                })

            })

    }
    useEffect(() => {
        // getlivevideo();
        getVideo();

    }, [])
    useEffect(() => {
        axios.get('https://api.twitch.tv/kraken/channels/625512126/videos?limit=14',{
            headers:{
                'Accept' : 'application/vnd.twitchtv.v5+json',
                "Client-ID":"urw4uabfjw9juq032a4r3tneah3ggx"
            }
        }).then(json=>setData(json.data)).catch(err=>console.log(err.message))
}, [setData])
const handleUrl=(url,details)=>{
    console.log(url)
    setrealTimeVideo(url)
    setVideoDetails(details)
}
useEffect(()=>{
    handleUrl()
    
},[setrealTimeVideo])

    return (
        <div>
            <CannabiscapitalHeader />
            <section className="hm_banner">
                <div className="banner_box">
                    <img src={banner} style={{ "width": "100%" }} alt="" />
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
                                                        {realTimeVideo===undefined ? <TwitchPlayer channel="cannabiscapitol" width={700} height={435} controls/> 
                                                          :<ReactPlayer url={realTimeVideo} width={700} height={435} controls/>}
                                                            <div className="showLive">
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
                                                                <h3 className="sec_title">Live Now</h3>
                                                                <span className="episodeNumber">Cannabis Capitol Daily </span>
                                                                <span className="episodeNumber">@StonerShenanigans w/ </span>
                                                                <span className="episodeNumber">@CaliforniaClouds420</span>
                                                                <span className="episodeNumber">@JenniLovesDank</span>
                                                                <span className="episodeNumber">@JourdanJade, & @The_Faded_Kitten</span>
                                                                <p className="newsGuest"><a href="https://www.twitch.tv/cannabiscapitol" target="-blank" rel="noreferrer">Live now on twitch.tv/cannabiscapitol </a></p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <Livestorevideo /> */}
                            <div className="intertainWraper">
                                <div className="intertainWraperIn">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="newslistTop">
                                                <h2 className="newslistTop--title sec_title">Daily Live Stream</h2>
                                                {/* <a className="newslistTop--readmore" href="video">See More Videos  </a> */}
                                                </div>
                                                <OwlCarousel className="owl-theme" loop items={4} margin={10}>
                                                    {data?.videos?.map((item) => {
                                                        return <li className="newsListItem" >
                                                            <div className="intThumbnail"  >
                                                                <img src={item.thumbnails.large[0].url} alt={item.thumbnails.large[0].url} onClick={()=>handleUrl(item.url)}></img>
                                                            </div>
                                                            <div className="intDetails">
                                                                <p className="newsGuest">{item.title}</p>
                                                                {/* <p className="newsGuest">{item.videourl}</p> */}
                                                            </div>
                                                        </li>
                                                    })}
                                                    </OwlCarousel>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {video.map((item) => {
                                // console.log("Me", item)
                                return <div className="intertainWraper">

                                    <div className="intertainWraperIn">

                                        <div className="row">
                                            <div className="col-lg-12">

                                                <div className="newslistTop">

                                                    <h2 className="newslistTop--title sec_title">Original</h2>
                                                    <a className="newslistTop--readmore" href="video">See More Videos > </a>
                                                </div>
                                                <a href="video" className="news_listBottom">
                                                    <ul className="newsList">
                                                        {/* {item.map((val)=>{ */}
                                                        <li className="newsListItem" >
                                                            <div className="intThumbnail"  >

                                                                <img src={item?.thumbnails} width="100%" height="100%"></img>

                                                            </div>

                                                            <div className="intDetails">
                                                                <p className="newsGuest">{item.title}</p>
                                                            </div>
                                                        </li>
                                
                                                    </ul>

                                                </a>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            })}
                        </div>
                    </div>
                </div>

            </section>

            <CannabiscapitalFooter />
        </div>
    )
}

export default Cannabiscapitalintertainment;

