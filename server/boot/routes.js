module.exports = function(app) {
    // Install a "/ping" route that returns "pong"
    var router = app.loopback.Router();

    app.get('/ping', function(req, res) {
      res.send('You doing great keep it up');
    });

    app.use(router)
  }