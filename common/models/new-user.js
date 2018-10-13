'use strict';

module.exports = function(Newuser) {

    Newuser.sendEmail = function(cb) {
        console.log(Newuser);
        Newuser.app.models.Email.send({
          to: 'androidshubham@gmail.com',
          from: 'utility.services.development@gmail.com',
          subject: 'my subject',
          text: 'my text',
          html: 'my <em>html</em>'
        }, function(err, mail) {
          console.log('email sent!');
          cb(err);
        });
      }
};
