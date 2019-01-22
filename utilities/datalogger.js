var fs = require('fs');

module.exports = {
  // redirect global console object to log file
  logfile: function() {
    const Console = console.constructor;
    var con = new Console(fs.createWriteStream('./log/ServerData.log', {'flags': 'a'}));
    Object.keys(Console.prototype).forEach(name => {
        console[name] = function() {
            con[name].apply(con, arguments);
        };
    });
  }
};
