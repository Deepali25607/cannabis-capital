import React, { useState, useEffect } from 'react'
import Pagination from './Pagination';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import banner from './images/banner.png';
import ReactPlayer from 'react-player';
// import post1 from './images/post1.jpg';
// import post2 from './images/post2.png';
// import post3 from './images/post3.jpg';
// import instagram from './images/instagram.jpg';
// import Video from './Video';
import { Icon } from '@iconify/react';
import playCircleOutline from '@iconify-icons/mdi/play-circle-outline';
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
// import ReactPlayer from 'react-player';
import axios from "axios";
// import InstagramEmbed from 'react-instagram-embed';
import InstagramPost from './InstagramPost';
import Sponsors from './Sponsors';
import NewsDetails from './NewsDetails';
function Cannabiscapitalindex() {
    const [newslist, setNewslist] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [video, setVideo] =useState ("")
    const[content,setContent]=useState("")
    const [date, setDate] =useState ("")
    useEffect(() => {

        axios.get("https://dev.cannabiscapitol.com/api/get_post_list?slug=well-done")


            .then(res => {
                console.log("Respnse", res);
                const store = res.data.data;
                // console.log("store", store);

                const result = store.posts.map((item) => {
                    let ContentSlice = item.content.slice(3, 30);
                    ContentSlice = ContentSlice.substring(0, ContentSlice.length - 4);
                    let dateSlice = item.created_at.slice(0, 10);
                    return { image: item?.image, title: item.title, date: dateSlice, content: ContentSlice, category: item?.category?.title }
                })
                // console.log("Welcome Posts", result);
                setNewslist(result);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newslist.slice(indexOfFirstPost, indexOfLastPost);
    // console.log("Slice", currentPosts);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    // console.log("Paginate", paginate)

    useEffect(() => {
        fetch("https://dev.cannabiscapitol.com/api/featured-video")
            .then(res => res.json())
            .then(data => {
                console.log(data.data.video)
                setVideo(data.data.video)
                let ContentSlice = data.data.video.content.slice(3, 30);
                    ContentSlice = ContentSlice.substring(0, ContentSlice.length - 4);
                    setContent(ContentSlice)
                    let dateSlice = data.data.video.updated_at.slice(0, 10);
                    setDate(dateSlice)
            })
        },[])
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

                                                    <ReactPlayer url={video.file_path} width="100%" height="450px" controls></ReactPlayer>
                                                    {/* <img src={post1} className="newscard--postThum" alt="" /> */}
                                                    {/* <Icon icon={playCircleOutline} color="white" className="newscard--playIcon" /> */}

                                                </div>
                                                <div className="newscard--postCont">
                                                    <h4 className="newscard--postCategory">{video.category_name}</h4>
                                                    <h2 className="newscard--postTitle">{video.title}</h2>
                                                    <span className="newscard--postDate"><i>{date}</i></span>
                                                    <p className="newscard--postPara">{content}</p>
                                                </div>
                                                <a href="Cannabiscapitalintertainment" className="newscard--linkDetails">More Video</a>
                                            </div>
                                        </div>
                                        {currentPosts.map((item) =>
                                            item.category === "ENTERTAINMENT" ?

                                                <div className="newscard list-item">
                                                    <div className="newscard--wrap">

                                                        <div className="newscard--videoPlay">
                                                        <a href="NewsDetails">
                                                            <img src={item.image} className="newscard--postThum" alt="post2" />
                                                           </a>
                                                        </div>
                                                        <div classNameName="newscard--postCont">
                                                            <h4 className="newscard--postCategory">{item.category}</h4>
                                                            <h2 className="newscard--postTitle">{item.title}</h2>
                                                            <span className="newscard--postDate"><i>{item.date}</i></span>
                                                            <p className="newscard--postPara">{item.content}</p>
                                                        </div>
                                                        <a href="CannabiscapitalNews" className="newscard--linkDetails">Read More</a>
                                                        
                                                    </div>
                                                </div>

                                                :
                                                <div className="newscard list-item">
                                                    <div className="newscard--wrap">

                                                        <div className="newscard--videoPlay">
                                                           <a href="EntertainmentVideo">
                                                            <img src={item.image} className="newscard--postThum" alt="post2" />
                                                            <Icon icon={playCircleOutline} color="white" className="newscard--playIcon" />
                                                            </a>
                                                        </div>

                                                        <div classNameName="newscard--postCont">
                                                            <h4 className="newscard--postCategory">{item.category}</h4>
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
