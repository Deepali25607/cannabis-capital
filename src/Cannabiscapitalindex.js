import React, { useState, useEffect } from 'react'
import Pagination from './Pagination';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import banner from './images/banner.png';
// import post1 from './images/post1.jpg';
// import post2 from './images/post2.png';
// import post3 from './images/post3.jpg';
// import instagram from './images/instagram.jpg';
// import sponsor1 from './images/sponsor1.jpg';
// import sponsor2 from './images/sponsor2.jpg';
// import sponsor3 from './images/sponsor3.jpg';
// import Sighup from './Signup';
// import { Icon } from '@iconify/react';
// import playCircleOutline from '@iconify-icons/mdi/play-circle-outline';
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
// import ReactPlayer from 'react-player';
import axios from "axios";
// import InstagramEmbed from 'react-instagram-embed';
import InstagramPost from './InstagramPost';
import Sponsors from './Sponsors';
// import Posts from './Posts';
function Cannabiscapitalindex() {
    const [newslist, setNewslist] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    useEffect(() => {

        axios.get("https://dev.cannabiscapitol.com/api/get_post_list?slug=well-done")


            .then(res => {
                console.log(res);
                const store = res.data.data;
                console.log("store", store);

                const result = store.posts.map((item) => {
                    let ContentSlice = item.content.slice(3, 30);
                    ContentSlice = ContentSlice.substring(0, ContentSlice.length - 4);
                    let dateSlice = item.created_at.slice(0, 10);
                    return { image: item?.image, title: item.title, date: dateSlice, content: ContentSlice, category: item.category }
                })
                console.log("Welcome Posts", result);
                setNewslist(result);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newslist.slice(indexOfFirstPost, indexOfLastPost);
    console.log("Slice", currentPosts);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log("Paginate", paginate)
    return (
        <div>

            <CannabiscapitalHeader />

            <section className="hm_banner">
                <div className="banner_box">
                    <img src={banner} className="" alt="banner" />
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

                                                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" width="100%" height="450px" frameBorder="0"
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
                                                <a href="Cannabiscapitalintertainment" className="newscard--linkDetails">More Video</a>
                                            </div>
                                        </div>
                                        {currentPosts.map((item) =>
                                            <div className="newscard list-item">
                                                <div className="newscard--wrap">
                                                    <div className="newscard--videoPlay">

                                                        <img src={item.image} className="newscard--postThum" alt="post2" />
                                                        {/* <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" width="300px" height="180px" frameBorder="0"
                                                          allowFullScreen="true" title="video"></iframe> */}
                                                    </div>
                                                    <div classNameName="newscard--postCont">
                                                        <h4 className="newscard--postCategory">Entertainment</h4>
                                                        <h2 className="newscard--postTitle">{item.title}</h2>
                                                        <span className="newscard--postDate"><i>{item.date}</i></span>
                                                        <p className="newscard--postPara">{item.content}</p>
                                                    </div>
                                                    <a href="Cannabiscapitalintertainment" className="newscard--linkDetails">More Video</a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* <Posts newslist={currentPosts} /> */}
                                <Pagination
                                    postsPerPage={postsPerPage}
                                    totalPosts={newslist.length}
                                    paginate={paginate}

                                />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="rightWrap">
                                <div className="rightWrapinIn">
                                    <div className="sidebarMain searchSidebar">
                                        {/* <form className="formSidebar" action="">
                                            <input type="search" name="search" className="searchRight"
                                                placeholder="Search and hit etner..." />
                                        </form> */}
                                    </div>
                                    <div className="sidebarMain newsletterSidebar">
                                        <h3 className="sidebarTitle sec_title">JOIN OUR NETWORK</h3>
                                        <form className="formSidebar" action="">
                                            {/* <label for="">Email Address</label>
                                            <input type="email" name="email" className="searchRight"
                                                placeholder="Your Email Address" /> */}
                                            <a href="signup" data-toggle="modal" data-target="#signupForm">
                                                <input type="submit" value="Sign Up" />
                                            </a>
                                        </form>
                                    </div>

                                    <div className="sidebarMain">
                                        <h3 className="sidebarTitle sec_title">Instagram</h3>
                                        <div className="rightadv">

                                            <InstagramPost />

                                        </div>
                                    </div>

                                    <div className="sidebarMain">
                                        <h3 className="sidebarTitle sec_title">Sponsors</h3>
                                        <div className="rightadv">
                                            {/* <img src={sponsor1} alt="" /> */}
                                            <Sponsors />
                                        </div>
                                        {/* <div className="rightadv">
                                            <img src={sponsor2} alt="" />
                                        </div>
                                        <div className="rightadv">
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


export default Cannabiscapitalindex;
