import React from 'react';
import './videoCard.css';
import Avatar from "@mui/material/Avatar";

function VideoCard({ image, title, channel, timestamp, channelImage, views }) {
  return (
    <section className="videoCard">
      <img className="videoCard_thumbnail" src={image} alt="" />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} &#x2022; {timestamp}
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoCard