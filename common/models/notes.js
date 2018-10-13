'use strict';

module.exports = function(Notes) {
    Notes.CreateMethod = function(cb){
        var date = new Date();
        var response = date.toString();
        cb(null, response);
    };
    Notes.remoteMethod(
        'CreateMethod', {
            http: { path: '/shubham', verb: 'get' },
            returns: { arg: 'shubham', }
    })
};
