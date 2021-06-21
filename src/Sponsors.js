import React, {useState,useEffect} from 'react'
import axios from "axios";
import data from '@iconify-icons/mdi/play-circle-outline';

function Sponsors(){
    const [video, setVideo] = useState([])
    const getData = () => {
    axios
    .get('https://dev.cannabiscapitol.com/api/get_advertisement?limit=3')
    .then(video =>{ 
const store=video.data.data.advertisements
console.log(store)
        const resultplay = store.map((itemplay) => {    
            return{image:itemplay.image}
            
    //   console.log("Hello result",itemplay.image);
    })
    console.log("Welcome",resultplay)
    setVideo(resultplay)
})
    .catch(error =>{
    console.log(error);
    })

}
useEffect(() => {
    getData();
    

}, [])
console.log("Hello",video)
// let stores=data.data;
// console.log(stores);
    return(
        
        <div>
              { video.map((item) => {    
            return(
             <img src={item.image} alt="" />
            )
        })}
            
        </div>
    )
}
export default Sponsors;