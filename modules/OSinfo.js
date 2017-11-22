var os = require('os'),
    time = require('./time'),
    colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.red, type);
    console.log('Release:'.green, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime: '.yellow, time.formatTime(uptime));
    console.log('User name:'.rainbow, userInfo.username);
    console.log('Home dir:'.trap, userInfo.homedir);
}

exports.print = getOSinfo;