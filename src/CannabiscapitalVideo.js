import React from 'react'
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import logobannerSection from './images/logo-bannerSection.png';
import videopage from './images/video-page.jpg';
import post2 from './images/post2.png';
import sponsor2 from './images/sponsor2.jpg';

function CannabiscapitalVideo(){
    
        return (
            <div>
                <CannabiscapitalHeader />
                <section class="logoBanner">
                    <div class="container">
                        <div class="logoBanner--wraper">
                            <img src={logobannerSection} alt="" />
                        </div>
                    </div>
                </section>

                <section class="wrap_con">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="leftWrap">
                                    <div class="leftWrapin">

                                        <div class="articleMain">
                                            <div class="articleMain--thumbnail vidThumb">
                                                <img src={videopage} alt="" />
                                            </div>
                                            <h2 class="articleMain--title">High Jinx Episode 2 Hosted by Adam Ill and Co-Host Angela Mazzanti</h2>

                                            <div class="articleMain--content">

                                                <div class="articleMain--description">
                                                    <p>
                                                        High Jinx Host Adam Ill and Co-Host Angela Mazzanti sat down with Ricky Williams ( @williams )professional NFL player and got to hear how cannabis impacted his life. We saw clips from the #CannabisCommunity​ and the #NFL​ and learned how he went from being the best running back in history, to losing over  $10million at the height of his career for smoking weed. Check out what #RickyWilliams​ had to share on Episode 2 of #HighJinx​.

                                                        Special thanks to the sponsors :
                                                        @loadedco
                                                        @malibucannabisflower
                                                        @3c.farms
                                                        @globmops
                                                        @InfusedDigital
                                                        #cannabiscapitol
                                                        —-
                                                        🔥💨
                                                        —-
                                                        #cannabiscommunity​ #cannabisshow​ #cannabiscapitoltv​ #cannabisevent​ #adamill​ #angelamazzanti​ #cannabiscapitolnetwork​ #rickywilliams​ #nfl​ #runningback​ #history​ #cannabisadvocate​ #movie​ #reallife​ #truestory​ #williams​ #explore​ #weed​ #passion​ #biggesthits​ #sportcelebrationfails​ #stonerathletes​ #productivestoners
                                            </p>
                                                </div>
                                            </div>
                                            <div class="articleMain--info">
                                                <span class="articleMain--tags">#tag #tag2 #tag3 #tag4 #tag #tag2 #tag3 #tag4</span>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="rightWrap">
                                    <div class="rightWrapinIn">
                                        <div class="sidebarMain">
                                            <h3 class="sidebarTitle sec_title">Related Videos</h3>
                                            <div class="rightadv">
                                                <div class="relatedVideos">
                                                    <div class="news_listBottom">
                                                        <ul class="newsList">
                                                            <li class="newsListItem">
                                                                <a href="#" class="newsListItemLink">
                                                                    <div class="intThumbnail">
                                                                        <img src={post2} alt="" />
                                                                    </div>
                                                                    <div class="intDetails">
                                                                        <span class="newsTitle">High Jinx</span> <span
                                                                            class="episodeNumber">Episode 1</span>
                                                                        <p class="newsGuest">Featuring Special Guest</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="newsListItem">
                                                                <a href="#" class="newsListItemLink">
                                                                    <div class="intThumbnail">
                                                                        <img src={post2} alt="" />
                                                                    </div>
                                                                    <div class="intDetails">
                                                                        <span class="newsTitle">High Jinx</span> <span
                                                                            class="episodeNumber">Episode 1</span>
                                                                        <p class="newsGuest">Featuring Special Guest</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="newsListItem">
                                                                <a href="#" class="newsListItemLink">
                                                                    <div class="intThumbnail">
                                                                        <img src={post2} alt="" />
                                                                    </div>
                                                                    <div class="intDetails">
                                                                        <span class="newsTitle">High Jinx</span> <span
                                                                            class="episodeNumber">Episode 1</span>
                                                                        <p class="newsGuest">Featuring Special Guest</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="newsListItem">
                                                                <a href="#" class="newsListItemLink">
                                                                    <div class="intThumbnail">
                                                                        <img src={post2} alt="" />
                                                                    </div>
                                                                    <div class="intDetails">
                                                                        <span class="newsTitle">High Jinx</span> <span
                                                                            class="episodeNumber">Episode 1</span>
                                                                        <p class="newsGuest">Featuring Special Guest</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="moreVideosLink">
                                                        <a href="!#">More like this ></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sidebarMain">

                                            <div class="rightadv">
                                                <img src={sponsor2} alt="" />
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


export default CannabiscapitalVideo
