// in this file you can append custom step methods to 'I' object

const { WAIT_TIMEOUT } = require("./e2e/constants/constantes");

// -------------------- GRAVAÇÃO DE VÍDEO --------------------
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const Ffmpeg = require('fluent-ffmpeg');
// Ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe')
// Ffmpeg.setFfprobePath('C:/ffmpeg/bin')
// -----------------------------------------------------------

module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
