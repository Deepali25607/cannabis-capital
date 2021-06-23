import React, { useState, useEffect } from 'react'
import axios from "axios";

function Livestorevideo() {
    const [data, setData] = useState([])
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://api.twitch.tv/kraken/channels/625512126/videos?limit=24',
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': 'qykybxzj9rqt1rji8qkh2uodjnsuv9'
            }
        }
        axios(config)
            .then(result => {
                console.log(result)
                const store = result.data.videos;
                console.log("Hello", store);
                const livevideo = store.map(item => {
                    //    const url=item.url
                    //    console.log(livevideo);
                    return { videourl: item.url, videotitle: item.title, image: item.thumbnails?.large[0]?.url }
                })
                console.log("Welcome", livevideo);
                setData(livevideo)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (

        <div className="intertainWraper">
            <div className="intertainWraperIn">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="newslistTop">
                            <h2 className="newslistTop--title sec_title">Daily Live Stream</h2>
                            <a className="newslistTop--readmore" href="video">See More Videos > </a>
                            {/* <p className="newslistTop--content">
                       This is playlist Three dude
                       </p> */}

                        </div>

                        <a href="video" className="news_listBottom">
                            <ul className="newsList">

                                {data.map((item) => {

                                    return <li className="newsListItem" >
                                        <div className="intThumbnail"  >

                                            <img src={item.image} ></img>

                                        </div>
                                        <div className="intDetails">
                                            <p className="newsGuest">{item.videotitle}</p>
                                        </div>
                                    </li>

                                })}
                            </ul>


                        </a>

                    </div>

                </div>

            </div>

        </div>




    )
}
export default Livestorevideo;