import React from 'react';
import ComponentBase from '../components/ComponentBase';
import { shutterStockVideos, flickrImages } from '../Api/api';

export default class MediaGalleryPage extends ComponentBase {
  componentDidMount() {
    flickrImages('dog').then(images => console.log(images, 'Images'));
    shutterStockVideos('cat').then(videos => console.log(videos, 'Videos'));
  }

  render() {
    return (
      <div>
        Videos and Pictures
      </div>
    )
  }
}