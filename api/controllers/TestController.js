/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getFromServer: (req, res, next) => {
    var connection = new serverConnection(1);
    connection.connect().then(data => {
      return res.json(data);
    }).catch(err => {
      console.log(err);
      return next(err);
    })
  }
};

