// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

import Countdown from '../_modules/atoms/countdown/countdown';

$(() => {
  window.prototype = false;
  window.end_date = new Date('11/11/2018');

  new Countdown(window.end_date);


  // handle background
  let body = $('body'),
  presentsBg = $('.presents'),
  xPos = 0,
  endX = -2184 + 1080,
  interval = 10, // in ms
  wait = 120000,
  toShowItems = $('.toShow'),
  bottomItems = $('.bottom'),
  allCoins = $('.coin'),
  coinsBottomLimit = 1765,
  coinsDuration = [ 10000, 16000, 12500, 12000, 14500, 19000, 9000, 15000];

  if (window.prototype) {
    interval = .5;
    wait = 15000;
  }


  let backgroundInterval = setInterval(handleBackground, interval);

  function handleBackground() {

    if (xPos == endX) {

      clearInterval(backgroundInterval);

      allCoins.addClass('show');

      allCoins.each(function(idx, each) {

        let $each = $(each),
        duration = coinsDuration[idx];

        $each.animate({
          top: coinsBottomLimit
        }, duration, 'linear');

      });

      let longestDuration = Math.max.apply(null, coinsDuration);

      setTimeout(function() {
        toShowItems.addClass('show');
      }, longestDuration + 500);

      setTimeout(function() {
        bottomItems.addClass('show');
      }, longestDuration + 1200);


      setTimeout(function() {

        xPos = 0;
        backgroundInterval = setInterval(handleBackground, interval);

        toShowItems.removeClass('show');
        bottomItems.removeClass('show');

      }, wait);

    } else {
      xPos --;
    }

    body.css('background-position-x', `${xPos}px`);

  }
});
