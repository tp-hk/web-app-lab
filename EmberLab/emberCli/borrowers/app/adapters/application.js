// ember install active-model-adapter is used to install the adapter
import DS from 'ember-data';
import config from '../config/environment';
//import ActiveModelAdapter from 'active-model-adapter';

// export default DS.RESTAdapter.extend({
// });
export default DS.ActiveModelAdapter.extend({
  // namespace option tells ember-data to namespace all the API requests under api
  // e.g. if asking for the colllection of friends, ember-data will make request to
  // /api/friends. If 'api' is missing, then /friends will be used instead

  host: config.host,
  namespace: 'api/v4',
  coalesceFindRequests: true
});
