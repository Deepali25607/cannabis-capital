import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import banner from './images/intertainment.png';
import axios from 'axios';
// import post2 from './images/post2.png';
// import post1 from './images/post1.jpg';
// import post3 from './images/post3.jpg';
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import LiveVideo from './LiveVideo';
// import sponsor1 from './images/sponsor1.jpg';
// import sponsor2 from './images/sponsor2.jpg';
// import sponsor3 from './images/sponsor3.jpg';
// https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLL3jD_qUrZ8NDZdqA5WIjNbMlm2EuV9R0&key=AIzaSyA6Ah_CjzrdnEu1-WDfHx1JlQJQoJnyFoA
function Cannabiscapitalintertainment() {
    let CHANNELID = "UC1pb1oF42Wz0YwjQRKQBv5Q"
    const [video, setVideo] = useState([])
    
    const getData = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${CHANNELID}&maxResults=28&key=AIzaSyA6Ah_CjzrdnEu1-WDfHx1JlQJQoJnyFoA`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const result = data.items.map((item) => {
                    // return { title: item.snippet.title, id: item.id, thumbnails: item.snippet.thumbnails.medium.url }
                    if (item.contentDetails.itemCount > 2) {
                        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=4&playlistId=${item.id}&key=AIzaSyA6Ah_CjzrdnEu1-WDfHx1JlQJQoJnyFoA `)
                        
                            .then(Response => Response.json())
                            .then(video => {
                                // console.log("Hello",video);
                                // const resultplay = dataplay?.items?.map((itemplay) => {    
                                //     return { title: itemplay?.snippet?.title, vid: itemplay?.contentDetails.videoId, playlistid: itemplay.snippet.playlistId, thumbnails: itemplay?.snippet?.thumbnails?.medium?.url }
                                // })
                            
                                setVideo(video)

                            })

                        }
                })

            })
    }
    
    useEffect(() => {
        getData();

    }, [])
   
    // const [vid, uid] = useState("")
    // const [title, utit] = useState("")
    // const [thumbnails, uthumbnails] = useState("")
    // const [playlistid, pid] = useState("")

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
                                                            {/* <img src={live} alt="" />
                                                            <div className="showLive">
                                                                <span>Live</span>
                                                            </div> */}
                                                            {/* <iframe src={live.thumbnail_url}
                                                             allowfullscreen="" scrolling="no" frameborder="0" allow="autoplay; fullscreen" title="Twitch" sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" width="100%" height="100%"></iframe> */}

                                                           <LiveVideo />
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


                            

                            <div className="intertainWraper">    
                                  <div className="intertainWraperIn">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="newslistTop">
                                                <h2 className="newslistTop--title sec_title">Original</h2>
                                                <a className="newslistTop--readmore" href="video">See More Videos > </a>
                                                {/* <p className="newslistTop--content">
                                        This is playlist Three dude
                                        </p> */}

                                            </div>
                                            
                                             <a href="video" className="news_listBottom">
                                                <ul className="newsList">
                                             
                                                 {/* console.log(index,item) */}
                                                 {video?.items?.map((item, index) => {
                                                     
                                                   return      <li className="newsListItem" key={index}>
                                                                <div className="intThumbnail"  >

                                                                <img src={item.snippet.thumbnails.medium} width="100%" height="100%"></img>

                                                            </div>
                                                            <div className="intDetails">
                                                                <p className="newsGuest">{item.snippet.title}</p>
                                                            </div>
                                                        </li>
                                                 
                                                    })} 
                                                </ul>
                                                {/* </div> */}
                                            
                                            </a>
                                            
                                        </div>
                                    
                                    </div>
                                    
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

export default Cannabiscapitalintertainment;

