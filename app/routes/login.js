import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

// The login route only accessible when the session is not authenticated
export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  // Clear a potentially stale error message from previous login attempts
  setupController: function(controller, model) {
    controller.set('errorMessage', null);
  }
});
