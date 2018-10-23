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
  xPos = 0,
  endX = -2184 + 1080,
  interval = 10, // in ms
  wait = 120000;

  if (window.prototype) {
    interval = .5;
    wait = 15000;
  }

  let backgroundInterval = setInterval(handleBackground, interval);

  function handleBackground() {

    if (xPos == endX) {

      clearInterval(backgroundInterval);

      console.log(`time now is ${new Date()}`);

      setTimeout(function() {

        console.log(`time end is ${new Date()}`);
        xPos = 0;
        backgroundInterval = setInterval(handleBackground, interval);

      }, wait);

    } else {
      xPos --;
    }

    body.css('background-position-x', `${xPos}px`);

  }
});
