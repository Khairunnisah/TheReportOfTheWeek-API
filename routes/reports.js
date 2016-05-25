const Report = require('../models/reports.js');

module.exports = app => {
  app.route('/reports')
  .get((req, res) => {
    Report.find({}, (err, reports) => {
      if(err) {
        res.status(412).json({msg: error.message});
      } else {
        res.json(reports);
      }
    });
  })
  .post((req, res) => {
    new Report({
      product: req.body.product,
      manufacturer: req.body.manufacturer,
      category: req.body.category,
      videoTitle: req.body.videoTitle,
      videoCode: req.body.videoCode,
      dateReleased: req.body.dateReleased,
      rating: req.body.rating,
      effectiveness: req.body.effectiveness
    }).save((err, report) => {
      if(err) {
        res.status(412).json({msg: err.message});
      } else {
        res.json(report);
      }
    });
  });
};
