import React from 'react';
import PropTypes from 'prop-types';
import ComponentBase from '../components/ComponentBase';
// import { shutterStockVideos, flickrImages } from '../Api/api';
import { connect } from 'react-redux';
import { searchMediaAction, selectImageAction, selectVideoAction } from '../actions/MediaActions';
import VideoPage from '../components/VideoPage';
import PhotoPage from '../components/PhotoPage';

// import { bindActionCreators } from 'redux';

class MediaGalleryPage extends ComponentBase {
  constructor(props) {
    super(props);
    super._bind('handleSelectImage', 'handleSelectVideo', 'handleSearch');
  }

  componentDidMount() {
    // flickrImages('dog').then(images => console.log(images, 'Images'));
    // shutterStockVideos('cat').then(videos => console.log(videos, 'Videos'));

    // this.props.dispatch(searchMediaAction('corgi'));
    this.props.dispatch(searchMediaAction('corgi'));
  }

  // Dispatches *selectImageAction* when any image is clicked
  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage));
  }

  // Dispatches *selectvideoAction* when any video is clicked
  handleSelectVideo(selectedVideo) {
    this.props.dispatch(selectVideoAction(selectedVideo));
  }

  // Dispatches *searchMediaAction* with query param.
  // We ensure action is dispatched to the store only if query param is provided.
  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  render() {
    const { images, selectedImage, videos, selectedVideo } = this.props;
    return (
      <div className="container-fluid">
        {images && selectedImage ? <div>
          <input
            type="text"
            ref={ref => (this.query = ref)}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search Library"
            onClick={this.handleSearch}
          />
          <div className="row">
            <PhotoPage
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={this.handleSelectImage}
            />
            <VideoPage
              videos={videos}
              selectedVideo={selectedVideo}
              onHandleSelectVideo={this.handleSelectVideo}
            />
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }
}

// Define PropTypes
MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ images, videos }) {
  return {
    images: images[0],
    selectedImage: images.selectedImage,
    videos: videos[0],
    selectedVideo: videos.selectedVideo
  }
}

export default connect(mapStateToProps)(MediaGalleryPage);
