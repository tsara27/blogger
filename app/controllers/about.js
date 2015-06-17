export default Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function(){
      alert("My name is Tsara");
    },
    showPicture: function(){
      this.set('isPictureShowing', true);
    },
    hidePicture: function(){
      this.set('isPictureShowing', false);
    }
  }
});
