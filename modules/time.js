function formatTime(uptime) {
    var minutes = Math.floor(uptime / 60);
    var seconds = (uptime - minutes * 60).toFixed(0);
    var hour = Math.floor(minutes / 60);
    if (hour > 0) {
        return hour + ' hour ' + (minutes - hour * 60) + ' min ' + seconds + ' sec';
    } else {
        return minutes + ' min ' + seconds + ' sec';
    }
}

exports.formatTime = formatTime;