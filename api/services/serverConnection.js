const request = require('superagent-bluebird-promise');

module.exports = class {
  constructor(pid){
    this.pid = pid;
    if (this.pid == 1) this.ip = 'http://176.97.34.40:6064/:6064';
    else this.ip = 'http://176.97.34.40:6064/:6064';
  }
 
  connect() {
    var address = this.ip + '/?command=connect&principal=' + this.pid;
    return request.get(address).then(data => {
      if (data && !data.error) {
        var response = JSON.parse(data.text);
        this.connection = response.root[0].connection;
        return {status: "success", message: response};
      } else {
        return {status: "error", message: ""};
      }
    })
  }

  receive(){

  }
};
