const fs = require('fs');
const path = require('path');
const RootDir = require('../Utilities/fileHelper')
// let regHouse= [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL) {
    this.HouseName = houseName;
    this.PricePerNight = price;
    this.Location = location;
    this.Rating = rating;
    this.HouseImage = photoURL;
  }

  save() {
    Home.fetchAll((regHouse => {
      regHouse.unshift(this);
      const filePath = path.join(RootDir, 'data', 'homes.json');
      fs.writeFile(filePath, JSON.stringify(regHouse), error => {
      console.log("File writing concluded:", error)
    })
    }))
  }

  static fetchAll(callback){
    const filePath = path.join(RootDir, 'data', 'homes.json');
    fs.readFile(filePath, (err, data) => {
      if(!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    })
  }
}
