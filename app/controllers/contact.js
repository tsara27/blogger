export default Ember.Controller.extend({
  actions: {
    sendMessage: function(){
      message = prompt('Type your secret message here!');
    }
  }
});