class Index {
  static home(req, res, next) {
    res.render('index', {title: req.app.locals.webname});
  }
}

module.exports = Index;
