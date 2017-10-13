module.exports.getIndex = function (req, res) {
  res.render('pages/index', {
    title: 'Главная страница',
    msg: req.query.msg,
  });
};

module.exports.getIndexAuth = function (req, res) {
  // требуем наличия логина и пароля в теле запроса
  if (!req.body.login || !req.body.password) {
    // если не указан логин или пароль - сообщаем об этом
    return res.redirect('/?msg=Не все поля формы заполнены!');
  }
  res.redirect('/admin');
};