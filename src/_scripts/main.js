// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

import Countdown from '../_modules/atoms/countdown/countdown';

$(() => {
  window.end_date = new Date('11/11/2018');

  new Countdown(window.end_date);

  // handle background
  let body = $('body'),
  xPos = 0;

  let backgroundInterval = setInterval(function() {

    xPos --;

    body.css('background-position-x', `${xPos}px`);

  }, 150); // every 10ms
});
