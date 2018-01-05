import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

export default function* startForeman() {
  // startForeman() is the root saga
  // effect creator that provisions the middleware to run a non-blocking call on watchSearchMedia saga
  yield fork(watchSearchMedia);
}