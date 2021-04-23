import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import logobannerSection from './images/logo-bannerSection.png';
import thumbnail from './images/thumbnail.png';
import sponsor1 from './images/sponsor1.jpg';
import sponsor2 from './images/sponsor2.jpg';
function CannabiscapitalArtical () {
    
        return (
            <div>
                <CannabiscapitalHeader />
                <section className="logoBanner">
                    <div className="container">
                        <div className="logoBanner--wraper">
                            <img src={logobannerSection} alt="" />
                        </div>
                    </div>
                </section>

                <section className="wrap_con" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="leftWrap">
                                    <div className="leftWrapin">

                                        <div className="articleMain">
                                            <h2 className="articleMain--title">Marlboro Man Meets Marijuana: Big Tobacco Bets On Bong
                                    Rips</h2>
                                            <h3 className="articleMain--subTitle">Cigarette Staple Parent Corp. Invests $1.8 Billion in
                                    Canadian Cannabis Company</h3>
                                            <div className="articleMain--info">
                                                <span className="articleMain--type">News</span>
                                                <span className="articleMain--category"><a href="#!">Health</a></span>
                                                <span className="articleMain--author">by Josh Waldrop</span>
                                                <span className="articleMain--date">January 3, 2019</span>
                                                <span className="articleMain--tags">#tag #tag2 #tag3 #tag4</span>
                                            </div>
                                            <div className="articleMain--content">
                                                <div className="articleMain--thumbnail">
                                                    <img src={thumbnail} alt="" />
                                                </div>
                                                <div className="articleMain--description">
                                                    <p>Marlboro parent company Altria Group Inc., amidst sagging cigarette sales, has joined the Green Rush and invested $1.8 billion for a 45% stake in Cronos Group, a Canadian based cannabis conglomerate. The deal gives Altria the option of acquiring greater shares over the next four years that would see the group realize a majority 55% overall stake in Cronos, according to the Associated Press.<br></br><br></br>
"Investing in Cronos Group as our exclusive partner in the emerging global cannabis category represents an exciting new growth opportunity for Altria," said Altria CEO Howard Willard. Cronos will use the infusion of funds to expand its distributive reach beyond Canada, which just months ago became the first major world economy and only the second country after Uruguay to legalize cannabis on a federal level.<br></br><br></br>
"Altria is the ideal partner for Cronos Group, providing the resources and expertise we need to meaningfully accelerate our strategic growth," said Cronos CEO Mike Gorenstein, according to CNN.<br></br><br></br>
As the tobacco lobby struggles to maintain its stronghold in the American marketplace thanks to a generation more focused on health consciousness than ever before, it was only a matter of time before the heads of the once seemingly indomitable industry followed in the footsteps of Big Alcohol in chasing the promise of a cannabis space seemingly poised to explode as the inevitability of federal legalization in the U.S.
draws ever closer. Earlier this year, Constellation Brands, the parent company of such libation brands as Corona, Pacifico, and Ballast Point beers, as well as SVEDKA vodka, invested $4 billion in another Canada based cannabis, Canopy Growth, netting them 38% of the company with the option to acquire a majority stake later.<br></br><br></br>
“We believe this represents a unique growth opportunity and through our partnership with Canopy, we are well-positioned to take a leadership role as this market continues to evolve,” Constellation CEO Rob Sands told Democrat & Chronicle.
                                        </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="rightWrap">
                                    <div className="rightWrapinIn">
                                        <div className="sidebarMain">
                                            <h3 className="sidebarTitle sec_title">Related Links</h3>
                                            <div className="rightadv">
                                                <div className="relatedArticle">
                                                    <ul className="relatedArticle--list">
                                                        <li className="relatedarticle--items"><a className="relatedarticle--cont" href="#">Prop 64: Pass it or Goup in Smoke?</a></li>
                                                        <li className="relatedarticle--items"><a className="relatedarticle--cont" href="#">CBD: The Benefits, Effects, and Future</a></li>
                                                        <li className="relatedarticle--items"><a className="relatedarticle--cont" href="#">Can CBD Help our Fuzzy Friends?</a></li>
                                                        <li className="relatedarticle--items"><a className="relatedarticle--cont" href="#">Is the FDA Monkeying Around?</a></li>
                                                        <li className="relatedarticle--items"><a className="relatedarticle--cont" href="#">High Hopes for the U.S.A</a></li>
                                                        <li className="relatedarticle--items"><a className="relatedarticle--cont" href="#">Cannabis and PTSD</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sidebarMain">
                                            <h3 className="sidebarTitle sec_title">Advertisement</h3>
                                            <div className="rightadv">
                                                <img src={sponsor1} alt="" />
                                            </div>
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




                <CannabiscapitalFooter />


            </div>
        )
    }


export default CannabiscapitalArtical