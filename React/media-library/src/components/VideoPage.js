import React from 'react';
import PropTypes from 'prop-types';

// First, we extract videos, onHandleSelectVideo, and selectedVideo 
// from props using destructuring assignment and then render.

function VideoPage({videos, onHandleSelectVideo, selectedVideo}) {
  // if (!videos || !selectedVideo)
  //   return null;

  return (
    <div className="col-md-6">
      <h2> Videos </h2>
      {/* <div className="select-video">
        <div key={selectedVideo.id}>
          <h6 className="title">{selectedVideo.description}</h6>
          <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
        </div>
      </div> */}
      <div className="video-thumbnail">
        {videos.map((video, i) => (
          <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
            <video controls src={video.mediaUrl} alt={video.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPage;