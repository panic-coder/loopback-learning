'use strict';

module.exports = function(Notes) {
    Notes.CreateMethod = function(data,cb){
        var date = new Date();
        var response = date.toString();
        Notes.create(data, function(err,userInstance) {
            console.log(err);
            
            console.log(userInstance);
            cb(null, userInstance);
        })
        
    };
    Notes.remoteMethod(
        'CreateMethod', {
            http: { path: '/create-note', verb: 'post' },
            accepts: { arg:'options', type: 'object' },
            returns: { arg: 'shubham', type: 'object' }
    })
};
