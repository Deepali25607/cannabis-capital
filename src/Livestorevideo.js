import React, {useState,useEffect} from 'react'
import axios from "axios";

function Livestorevideo(){
    const[data,setData]=useState([])
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
    .then(result =>{
        console.log(result)
        const store=result.data.videos;
       console.log("Hello",store);
       const livevideo=store.map(item =>{
        //    const url=item.url
        //    console.log(livevideo);
        return{videourl:item.url,videotitle:item.title,image:item.thumbnails?.large[0]?.url}
       })
       console.log("Welcome",livevideo);
       setData(livevideo)
    })
    .catch(error=>{
        console.log(error)
    })
}, [])
    return(
        <div>

            {data.map((item) => {
                  {/* {console.log("exact",data) }  */}
                //   <li className="newsListItem" >
                // <div className="intThumbnail"  >
           return   <div>
              <img src={item.image} alt=" " /> 
              <p >{item.videotitle}</p>
              </div>
            //   <div className="intDetails">
            //  <p className="newsGuest">{item.videotitle}</p>
            
                {/* <p >{item.videotitle}</p>  */}
                
            {/* //  <iframe src={data} frameborder="0" allowfullscreen="true" scrolling="no" height="150" width="300"></iframe> */}
            // </li>
               })}    
               
               
        </div>
    )
}
export default Livestorevideo;