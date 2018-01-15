import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

// redux-form. Must use 'form' as the key in the app state
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
