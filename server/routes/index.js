//
//     nodemavens
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

var blacklist = JSON.parse(process.env.BLICKLIST || '[]');

module.exports = function(app, controller) {

  //
  // Disallow blacklisted IPs and verify the session count.
  //
  app.all('/*', function(req, res, next) {
    if ('POST' === req.method) {
      if (blacklist.indexOf(req.connection.remoteAddress) > -1) {
        res.statusCode = 403;
        return res.json();
      }

      if (req.session.count) {
        if (req.session.count === 5) {
          return res.json({ error: 'Whoa! That\'s a little too much love... you are making people uncomfortable...' });
        } else {
          req.session.count++;
        }
      } else {
        req.session.count = 1;
      }
    }

    next();
  });

  //
  // GET index.
  //
  app.get('/', function(req, res) {
    res.render('index');
  });

  //
  // API routes.
  // ===========
  //

  //
  // GET the most recent mavens.
  //
  app.get('/api/mavens/recent', function(req, res) {
    controller.getRecent()
      .then(function(mavens) {
        res.json(mavens);
      })
      .fail(function(err) {
        res.json({ error: err.message });
      })
      .done();
  });

  //
  // GET mavens.
  //
  app.get('/api/mavens/:username?', function(req, res) {
    controller.get(req.params.username)
      .then(function(mavens) {
        res.json(mavens);
      })
      .fail(function(err) {
        res.json({ error: err.message });
      })
      .done();
  });

  //
  // Create/POST a maven.
  //
  app.post('/api/mavens', function(req, res) {
    controller.create(req.body.username)
      .then(function(maven) {
        res.json(maven);
      })
      .fail(function(err) {
        res.json({ error: err.message });
      })
      .done();
  });

  //
  // Vote for a maven.
  //
  app.post('/api/mavens/:username/love', function(req, res) {
    controller.love(req.params.username)
      .then(function(maven) {
        res.json(maven);
      })
      .fail(function(err) {
        res.json({ error: err.message });
      })
      .done();
  });
};
