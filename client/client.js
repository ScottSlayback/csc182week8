import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.header.events({
  'click #demo': function() {
    console.log("You clicked me!");
  },
    'submit form': function(event) {
        event.preventDefault();
        Messages.insert({
            user: Meteor.user().emails[0].address,
            message: event.target.addMessage.value,
            when: new Date(),
        });
        event.target.addMessage.value='';
    },
});
Template.main.helpers({
  message: function() {
      return Messages.find().fetch();
  }
});