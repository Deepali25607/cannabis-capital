import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import banner from './images/banner.png';
import live from './images/live-post.png';
import post2 from './images/post2.png';
import post1 from './images/post1.jpg';
import post3 from './images/post3.jpg';
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
 function Cannabiscapitalintertainment (){
    
        return (
            <div>
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

                    <div className="intertainWraper">
                        <div className="intertainWraperIn">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="newslistTop">
                                        <h2 className="newslistTop--title sec_title">High Jinx</h2>
                                        <a className="newslistTop--readmore" href="#">See More Videos > </a>
                                        <p className="newslistTop--content">
                                            A fun filled, laughter induced show hosted by Adam Ill. Adam Ill entertains
                                            and interviews a special guest alongside co-host Angella Mazzanti while
                                            watching hilarious clips.
                                        </p>

                                    </div>
                                    <div className="news_listBottom">
                                        <ul className="newsList">
                                            <li className="newsListItem">
                                                <div className="intThumbnail">
                                                    <img src={post2} alt=""/>
                                                </div>
                                                <div className="intDetails">
                                                    <span className="newsTitle">High Jinx</span> <span
                                                        className="episodeNumber">Episode 1</span>
                                                    <p className="newsGuest">Featuring Special Guest</p>
                                                </div>
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post2} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post2} alt=""/>
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post2} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                        </ul>
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
                                        <h2 className="newslistTop--title sec_title">Stand up comedy</h2>
                                        <a className="newslistTop--readmore" href="#">See More Videos > </a>
                                        <p className="newslistTop--content">
                                            A fun filled, laughter induced show hosted by Adam Ill. Adam Ill entertains
                                            and interviews a special guest alongside co-host Angella Mazzanti while
                                            watching hilarious clips.
                                        </p>

                                    </div>
                                    <div className="news_listBottom">
                                        <ul className="newsList">
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post1} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post1} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post1} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post1} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                        </ul>
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
                                        <h2 className="newslistTop--title sec_title">reggae nights</h2>
                                        <a className="newslistTop--readmore" href="#">See More Videos > </a>
                                        <p className="newslistTop--content">
                                            A fun filled, laughter induced show hosted by Adam Ill. Adam Ill entertains
                                            and interviews a special guest alongside co-host Angella Mazzanti while
                                            watching hilarious clips.
                                        </p>

                                    </div>
                                    <div className="news_listBottom">
                                        <ul className="newsList">
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post3} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post3} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post3} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post3} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                        </ul>
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
                                        <h2 className="newslistTop--title sec_title">High Jinx</h2>
                                        <a className="newslistTop--readmore" href="#">See More Videos > </a>
                                        <p className="newslistTop--content">
                                            A fun filled, laughter induced show hosted by Adam Ill. Adam Ill entertains
                                            and interviews a special guest alongside co-host Angella Mazzanti while
                                            watching hilarious clips.
                                        </p>

                                    </div>
                                    <div className="news_listBottom">
                                        <ul className="newsList">
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post1} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post1} alt=""/>
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post1} alt=""/>
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post1} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                        </ul>
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
                                        <h2 className="newslistTop--title sec_title">High Jinx</h2>
                                        <a className="newslistTop--readmore" href="#">See More Videos > </a>
                                        <p className="newslistTop--content">
                                            A fun filled, laughter induced show hosted by Adam Ill. Adam Ill entertains
                                            and interviews a special guest alongside co-host Angella Mazzanti while
                                            watching hilarious clips.
                                        </p>

                                    </div>
                                    <div className="news_listBottom">
                                        <ul className="newsList">
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post2} alt=""/>
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post2} alt=""/>
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post2} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                            <li className="newsListItem">
                                                <a href="#" className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={post2} alt=""/>
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">High Jinx</span> <span
                                                            className="episodeNumber">Episode 1</span>
                                                        <p className="newsGuest">Featuring Special Guest</p>
                                                    </div>
                                                </a>                                                
                                            </li>
                                        </ul>
                                    </div>
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
