import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts');
  this.resource('about');
  this.resource('contact');
});

export default Router;
