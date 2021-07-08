import React from 'react'
import InstagramFeed from 'react-ig-feed'
const MainDiv ={
  display:"flex",
  flexWrap:"wrap"
}
const row = {
  content: "",
  clear: "both",
  display: "table"
}
const column = {
  // display: "inline-block",
  float: "left",
  width: "50%",
  padding: "5px"
}
const InstagramPost = () => {

  return (
    <div style={MainDiv}>
      <div style={row}>
    <div style={column} >
     
        <InstagramFeed token="IGQVJVSE9oMGduenAtYzhCcVNJazBTWWkyd3ozblVWdGxlWGN1YmRHa2N4MUN2dGFWcThXSFF5a1NmZA3drVkdtNndodGYtRDZANRjlyV2NzajVMRnctTTlVODAxanpaX0NXbjNQUnhTLU00OUNzYUFwcQZDZD" counter="6" />
        </div>
        </div>
    </div>
  )
};

export default InstagramPost;