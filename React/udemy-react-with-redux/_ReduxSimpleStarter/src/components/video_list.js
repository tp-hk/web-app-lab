import React from 'react';
import ComponentBase from './ComponentBase';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  if (!props || !props.videos)
    return;

  // console.log(props.videos.length);

  return (
    <ul className='col-md-4 list-group'>
      {
        props.videos.map((video) => {
          return <VideoListItem
            onVideoClick={props.onVideoSelect}
            key={video.etag}
            video={video}
          />;
        })
      }
    </ul>
  );
};

export default VideoList;