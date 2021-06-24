import { findByLabelText } from '@testing-library/react'
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
     
        <InstagramFeed token="IGQVJWak9RbERDOHloVVlDMnJrRC1SaXFzWEFGZAGVFQ1ZAfYlVlWmttUE94ZAVBXZAzNNRnZARb195T3J3OXVEdVh1WW5lMDE2SVhMU3FsZAkVNVml4R29Fa2U2TGF6WVoxSkl4SUJHQm0yOFBjOWlzV2ppcgZDZD" counter="6" />
        </div>
        </div>
    </div>
  )
};

export default InstagramPost;