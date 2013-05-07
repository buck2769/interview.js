/**
 * 1) create an object factory that allows prototypical inheritance
 *
 * 2) create an event emmiter base class 
 *
 * 3) other objects can subscribe to events
 *
 */

function createObject(object) {
  function F(){}
  F.prototype = object;
  return new F();
}

function EvilPubSub(){
  var subscribers = {};
  return {
    subscribe: function(listener, topic) {
      if ( ! subscribers[topic] ) subscribers[topic] = [];
      subscribers[topic].push(listener);
    },

    notify: function(topic){
      if (subscribers[topic]) {
        subscribers[topic].forEach(function(listener){
          listener();
        });
      }
    },

    unsubscribe: function(topic) {
      subscribers[topic] = [];
    },

    getSubscribers: function(topic) {
      return subscribers[topic];
    }
  };
}
