import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {
  // const video = props.video;
  // const onVideoClick = props.onVideoClick

  let videoId = video.id.videoId;

  return (
    <li className='list-group-item' onClick={() => {onVideoClick(video)}}>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={video.snippet.thumbnails.default.url} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;