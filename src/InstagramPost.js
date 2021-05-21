import React from 'react'
import InstagramFeed from 'react-ig-feed'
const row = {
  overflow: "hidden",
  justifyContent:"space-around",
  width: "50%"
}
const column = {
  display: "inline-block",
}
const InstagramPost = () => {

  return (
    <div style={row}>
      <div style={column}>
        <InstagramFeed token="IGQVJWak9RbERDOHloVVlDMnJrRC1SaXFzWEFGZAGVFQ1ZAfYlVlWmttUE94ZAVBXZAzNNRnZARb195T3J3OXVEdVh1WW5lMDE2SVhMU3FsZAkVNVml4R29Fa2U2TGF6WVoxSkl4SUJHQm0yOFBjOWlzV2ppcgZDZD" counter="6" />
      </div>
    </div>
  )
};

export default InstagramPost;