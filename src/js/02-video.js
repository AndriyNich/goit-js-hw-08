import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const PARAM_CURRENT_TIME = 'videoplayer-current-time';

const startTime = localStorage.getItem(PARAM_CURRENT_TIME);

const player = new Player('vimeo-player');

function onPlayerTimeUpdate(event) {
  localStorage.setItem(PARAM_CURRENT_TIME, JSON.stringify(event));
}

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

try {
  if (startTime) {
    player.setCurrentTime(JSON.parse(startTime).seconds);
  }
} catch {
  player.setCurrentTime(0);
}
