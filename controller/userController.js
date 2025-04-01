const Home = require('../models/HomeData')


exports.userIndex = (req, res, next) => {
  const regHouse = Home.fetchAll((regHouse) => {
    res.render('userSide/userIndex', {regHouse: regHouse});
  });
  
}
exports.userHome = (req, res, next) => {
  const regHouse = Home.fetchAll((regHouse) => {
    res.render('userSide/userHome', {regHouse: regHouse});
  });
  
}
exports.userBooking = (req, res, next) => {
  const regHouse = Home.fetchAll((regHouse) => {
    res.render('userSide/userBooking', {regHouse: regHouse});
  });
  
}
exports.userFavourite = (req, res, next) => {
  const regHouse = Home.fetchAll((regHouse) => {
    res.render('userSide/userFavourite', {regHouse: regHouse});
  });
  
}