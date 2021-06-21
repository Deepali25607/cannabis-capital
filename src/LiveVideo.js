import React, {useState} from 'react'
import axios from "axios";

function LiveVideo(){
let API_KEY = "qykybxzj9rqt1rji8qkh2uodjnsuv9";
let accessToken;
const [live, setLive] = useState([])
const newpage = axios.create({
    headers: {
        "Authorization": "Bearer " + accessToken,
        "Client-ID": API_KEY
    }
   
});

axios.post('https://id.twitch.tv/oauth2/token?client_id=qykybxzj9rqt1rji8qkh2uodjnsuv9&client_secret=w6si8egpbwso3jp56ufihgt2pccntv&grant_type=client_credentials')
    .then(response => {
        accessToken = response.data.access_token;
        // console.log("Hello",accessToken);
    
var newpage = {
    method: 'get',
    url: 'https://api.twitch.tv/helix/search/channels?query=CannabisCapitol',
    headers: { 
      'client-id': 'qykybxzj9rqt1rji8qkh2uodjnsuv9', 
      'Authorization': `Bearer ${accessToken}`
            }
  };

  axios(newpage)
  .then(function (response) {
    // console.log((response));
    let store=(response.data.data[1].thumbnail_url)
    // console.log(store)

     setLive(store)
  })
  .catch(function (error) {
    // console.log(error);
   
  });
  
})
return(
  <div>
    {/* <img src={live} width="100%" height="100%" /> */}
    {/* <iframe src={live}
    allowfullscreen scrolling="no" frameborder="0" allow="autoplay; fullscreen" title="Twitch" sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" width="100%" height="100%"></iframe> */}
    
    <iframe src={"https://player.twitch.tv/?video=1037440724&parent=localhost"} frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
  </div>
)
}
export default LiveVideo;
// import React from 'react'
// function newpage () {
  
//   return(
//     <div>
//   <h1>Welcome Hello</h1>
//     </div>
//   )
// }
// export default newpage;