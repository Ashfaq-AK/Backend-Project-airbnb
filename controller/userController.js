const Home = require('../models/HomeData')

exports.userHome = (req, res, next) => {
  const regHouse = Home.fetchAll((regHouse) => {
    res.render('userSide/userHome', {regHouse: regHouse});
  });
  
}