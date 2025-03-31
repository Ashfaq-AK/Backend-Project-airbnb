const Home = require('../models/HomeData')

exports.hostHome = (req, res, next) => {
  const reghouse = Home.fetchAll((regHouse) => {
    res.render('hostSide/hostHome', {regHouse: regHouse});
  })
}

exports.AddHome = (req, res, next) => {
  res.render('hostSide/hostAddHome')
}

exports.postAddHome = (req, res, next) => {
  res.render('hostSide/hostHomeAdded')
  const home = new Home(req.body.HouseName, req.body.PricePerNight, req.body.Location, req.body.Rating, req.body.HouseImage)
  home.save();
}