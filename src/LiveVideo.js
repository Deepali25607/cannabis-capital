import React, { useEffect, useState } from 'react'
import axios from "axios";

function LiveVideo() {
  let API_KEY = "qykybxzj9rqt1rji8qkh2uodjnsuv9";
  let accessToken;
  const [live, setLive] = useState([])
  useEffect(() => {
    const newpage = axios.create({
      headers: {
        "Authorization": "Bearer " + accessToken,
        "Client-ID": API_KEY
      }

    });

    axios.post('https://id.twitch.tv/oauth2/token?client_id=qykybxzj9rqt1rji8qkh2uodjnsuv9&client_secret=w6si8egpbwso3jp56ufihgt2pccntv&grant_type=client_credentials')
      .then(response => {
        accessToken = response.data.access_token;
        console.log("Hello", accessToken);

        var newpage = {
          method: 'get',
          // url: 'https://api.twitch.tv/helix/search/channels?query=CannabisCapitol',

          url: 'https://api.twitch.tv/helix/videos?id=1066553317',
          headers: {
            'client-id': 'qykybxzj9rqt1rji8qkh2uodjnsuv9',
            'Authorization': `Bearer ${accessToken}`
          }
        };

        axios(newpage)
          .then(function (response) {
            console.log((response));
            let store = response.data.data;
            console.log(store)
            const result = store.map(item => {
              return { video: item.url, title: item.title ,thumbnail:item.thumbnail_url}
            })
            console.log(result)
            setLive(result)
          })
          .catch(function (error) {
            console.log(error);

          });


      })
  }, [])
  return (
    <div>
      {/* <img src={live} width="100%" height="100%" /> */}
      {/* <iframe src={item.video} 
    allowfullscreen scrolling="no" frameborder="0" allow="autoplay; fullscreen" title="Twitch" sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" width="100%" height="100%"></iframe> */}
      {live.map((item) => {
        return <div>
          <iframe src={item.video} allowfullscreen scrolling="no" frameborder="0" allow="autoplay; fullscreen" title="Twitch" sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" width="100%" height="100%"></iframe>
          <span>{item.title}</span>
        </div>
      })}

    </div>
  )
}
export default LiveVideo;
