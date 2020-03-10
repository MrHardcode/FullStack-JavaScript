const OS = require("os");

function getInfo() {
    let info = {};
    info.platform = OS.platform();
    info.osType = OS.type();
    info.freeMemory = OS.freemem();
    info.totalMemory = OS.totalmem();
    info.EOL = '\r\n';
    return info;
}

let info = getInfo();
module.exports.info = info;