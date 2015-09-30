import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      var _this = this;
      var credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('simple-auth-authenticator:devise', credentials).then(null, function(error) {
        var message = error.error;
        _this.set('errorMessage', message);
      });
    }
  }
});
