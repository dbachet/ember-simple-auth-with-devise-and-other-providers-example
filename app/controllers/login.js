import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('simple-auth-authenticator:devise', credentials);
    },

    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
