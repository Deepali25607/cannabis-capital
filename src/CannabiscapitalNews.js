import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import news from './images/news-banner.jpg';
// import post1 from './images/post1.jpg';
// import post2 from './images/post2.png';
// import post3 from './images/post3.jpg';
import CannabiscapitalHeader from './CannabiscapitalHeader';
import CannabiscapitalFooter from './CannabiscapitalFooter';
import axios from "axios";

function CannabiscapitalNews() {
    const [newslist, setNewslist] = useState([])
    useEffect(() => {

        axios.get("https://dev.cannabiscapitol.com/api/get_news_list?slug=well-done")


            .then(res => {
                console.log(res);
                const store = res.data.data;
                console.log(store);

                const result = store.posts.map((item) => {
                    let ContentSlice = item.content.slice(3, 30);
                    ContentSlice = ContentSlice.substring(0, ContentSlice.length - 4);
                    let dateSlice = item.created_at.slice(0, 10);
                    return { image: item?.image, title: item.title, date: dateSlice, content: ContentSlice }
                })
                console.log("Welcome", result);
                setNewslist(result);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    console.log(newslist)
    // console.log(newslist.data.post.image)
    // return(<div>

    // </div>)
    return (
        <div>
            <CannabiscapitalHeader />
            <section className="hm_banner">
                <div className="banner_box">
                    <img src={news} className="" alt="" />
                </div>
            </section>

            <section className="wrap_con">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="leftWrap">

                                <div className="leftWrapin">

                                    <div className="cardMain list-wrapper">
                                        {newslist.map((item) =>
                                            <div className="newscard list-item">

                                                <div className="newscard--wrap ">

                                                    <div className="newscard--videoPlay">

                                                        <img src={item.image} className="newscard--postThum" alt="post2" />

                                                        {/* {console.log(item.image)} */}


                                                    </div>

                                                    <div className="newscard--postCont">
                                                        <h4 className="newscard--postCategory">Entertainment</h4>
                                                        <h3 className="newscard--postTitle">{item.title}</h3>
                                                        <span className="newscard--postDate"><i>{item.date}</i></span>

                                                        <p className="newscard--postPara">{item.content}</p>
                                                    </div>

                                                    <a href="#!" className="newscard--linkDetails">Continue Reading</a>

                                                </div>

                                            </div>
                                        )}

                                    </div>
                                    <div id="pagination-container"></div>
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

export default CannabiscapitalNews