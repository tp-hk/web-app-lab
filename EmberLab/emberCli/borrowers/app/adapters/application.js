// ember install active-model-adapter is used to install the adapter
//import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';

// export default DS.RESTAdapter.extend({
// });
export default ActiveModelAdapter.extend({
  // namespace option tells ember-data to namespace all the API requests under api
  // e.g. if asking for the colllection of friends, ember-data will make request to
  // /api/friends. If 'api' is missing, then /friends will be used instead

  namespace: 'api/v4'
});
